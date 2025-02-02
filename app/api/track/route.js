import { NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";
import connectDb from "../../../utils/db";
import { createData } from "../../../utils/data.action";
import fetch from "node-fetch";

const IP2LOCATION_API_KEY = process.env.IP2LOCATION_API_KEY;

export async function POST(request) {
  try {
    console.log("Visitor tracking started");

    // Connect to MongoDB
    await connectDb();

    // Parse request body
    const body = await request.json();

    // Get user-agent and parse it
    const userAgent = request.headers.get("user-agent") || "Unknown";
    const parser = new UAParser(userAgent);
    const parsedUserAgent = parser.getResult();

    // ✅ Extract Client's Real IP
    const getClientIP = () => {
      const forwarded = request.headers.get("x-forwarded-for");
      if (forwarded) return forwarded.split(",")[0]; // First IP in list
      return request.headers.get("cf-connecting-ip") || "Unknown"; // Cloudflare fallback
    };

    const ip = getClientIP();
    
    // ✅ Detect Device Type
    let deviceType = parsedUserAgent.device.type || "Desktop"; // Default to Desktop

    // ✅ Convert `accept-language` to human-readable format
    const rawLanguage = request.headers.get("accept-language") || "Unknown";
    const formattedLanguage = rawLanguage.split(",")[0].split(";")[0].trim();

    const languageMap = {
      "en": "English",
      "hi": "Hindi",
      "fr": "French",
      "es": "Spanish",
      "en-GB": "English (UK)",
      "en-US": "English (US)",
      "hi-IN": "Hindi (India)",
    };

    const userLanguage = languageMap[formattedLanguage] || formattedLanguage;

    // ✅ Fetch Location Data using IP
    let locationData = { country: "Unknown", state: "Unknown", city: "Unknown" };

    if (ip !== "Unknown" && ip !== "::1") {
      try {
        const response = await fetch(
          `https://api.ip2location.io/?key=${IP2LOCATION_API_KEY}&ip=${ip}&format=json`
        );
        locationData = await response.json();
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    }

    console.log("Detected Location:", locationData);

    const location = locationData.region_name || "Fetching Location...";

    // ✅ Store visitor data
    const visitorData = {
      ip,
      browser: parsedUserAgent.browser?.name || "Unknown",
      platform: parsedUserAgent.os?.name || "Unknown",
      language: userLanguage,
      visitTime: new Date(),
      page: body?.page || "Unknown",
      deviceType,
      location
    };

    // ✅ Save to DB
    const newData = await createData(visitorData);

    return NextResponse.json(
      { message: "Visitor logged", visitor: newData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
