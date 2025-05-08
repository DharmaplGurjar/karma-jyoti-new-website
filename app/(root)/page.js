"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "/components/ui/button"
import Mail from "/components/Mail";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(true);

  // useEffect(() => {
  //   const trackVisit = async () => {
  //     try {
  //       await fetch("/api/track", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ page: "Home" }),
  //       });
  //     } catch (error) {
  //       console.error("Tracking error:", error);
  //     }
  //   };

  //   trackVisit();
    
  // }, []);

  return (
    <section className="home h-screen flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0]">
      {/* Notification Banner - now properly scoped */}
      {showNotification && (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4 relative max-w-auto ">
    {/* NEW Badge */}
    <div className="absolute -top-3 -left-2 bg-red-600 text-white px-3 py-1 rounded-full shadow-lg text-xs sm:text-sm font-bold">
      NEW
    </div>

    {/* Content Block */}
    <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
      <h2 className="text-lg sm:text-2xl font-semibold text-blue-700">📢 JEE 2026 Batch (class 9th to 12th) </h2>

      <p className="text-sm sm:text-base text-gray-700 mt-1">
        Classes for <strong>Class 9–10</strong> starting from <strong>June 1st week, 2025</strong>.<br />
        <span className="text-red-600 font-bold text-sm sm:text-base">Deadline to register: 18th May 2025</span>
      </p>

      <p className="mt-2 text-sm text-gray-600">📌 Scan the QR code or click the link below to register:</p>

      <img
        src="/images/jee-notification.png.jpg"
        alt="JEE 2026 Registration QR"
        className="w-full max-w-md lg:max-w-full mt-3 rounded-md"
      />

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScZKMFSGRinTlAfYd03bc-6wLaJPIxM0WuetFXY4X74j6-MpA/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-blue-600 hover:underline text-base sm:text-lg font-medium"
      >
        👉 Click here to Register
      </a>
    </div>
  </div>
)}


      {/* Donate Button - now with its own click handler */}
      <Button 
        onClick={() => router.push('/donate')}
        className="bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 mb-8 max-[380px]:text-xl"
      >
        🤍 Donate Now!
      </Button>

      {/* Main content */}
      <div className="relative w-full mt-8 max-sm:mb-[-50px]">
        <Image
          src="/images/jumbotron_1200.jpg"
          width={1200}
          height={800}
          alt="image"
          className="shadow-xl shadow-[#9b242d] rounded-lg"
        />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 flex-wrap gap-8 mt-16 py-16">
        <div 
          className="relative cursor-pointer border rounded-lg overflow-hidden" 
          onClick={() => router.push('/news')}
        >
          <Image
            src="/images/update.jpg"
            width={500}
            height={300}
            alt="image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            <h1 className="text-2xl">UPDATES</h1>
          </div>
        </div>

        <div 
          className="relative border rounded-lg cursor-pointer overflow-hidden" 
          onClick={() => router.push('/gallery')}
        >
          <Image
            src="/images/events.jpg"
            width={700}
            height={400}
            alt="events"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            <h1 className="text-2xl">EVENTS</h1>
          </div>
        </div>

        <div className="relative border rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0335359100195!2d86.43483247479406!3d23.817406486201627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bdc6d2ec5bd5%3A0x2bfd2c67332b57cb!2sKarma%20Jyoti!5e0!3m2!1sen!2sin!4v1722084823868!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            <h1 className="text-2xl">MAP</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;