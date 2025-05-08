import connectDb from "../../../utils/db"; 
import Visitor from "../../../utils/modal"; // Import the Visitor model
import { NextResponse } from 'next/server';

export async function GET(req) {
  if (req.method !== "GET") {
    console.log("no daa")
    return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }

  try {
    // Connect to the database
    await connectDb();
  

    // Fetch all visitors using Mongoose model
    const visitors = await Visitor.find({}).sort({ visitTime: -1 }); // Use Mongoose's find() to get all documents
    

    const headers = {
      "Cache-Control": "no-store, max-age=0",
      "Pragma": "no-cache",
    };

    return NextResponse.json(visitors, { status: 200, headers });
  } catch (error) {
    console.error("Database fetch error:", error);
    return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}
