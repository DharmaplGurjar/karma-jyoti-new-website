"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "/components/ui/button";
import Mail from "/components/Mail";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(true);

  return (
    <section className="home h-auto flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0] px-4 sm:px-8 pb-16">

      

      {/* 🎥 Karma Jyoti Video Section */}
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-2 text-blue-700">
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-700 mb-3">
        </p>
        <div
          className="relative cursor-pointer group w-full"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=C-b6Kod7VMM", "_blank")
          }
        >
          <Image
            src="/images/karmaJyotiYouTubeVideo.png"
            alt="Karma Jyoti YouTube Thumbnail"
            width={1280}
            height={720}
            className="rounded-md w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition">
            <button className="bg-red-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-md hover:bg-red-700">
              ▶ Watch on YouTube
            </button>
          </div>
        </div>
      </div>

      {/* Donate Button */}
      <Button
        onClick={() => router.push("/donate")}
        className="bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 my-8 max-[380px]:text-xl"
      >
        🤍 Donate Now!
      </Button>

      {/* Main Image */}
      <div className="relative w-full mt-8">
        <Image
          src="/images/jumbotron_1200.jpg"
          width={1200}
          height={800}
          alt="image"
          className="shadow-xl shadow-[#9b242d] rounded-lg"
        />
      </div>

      {/* Grid: Updates | Events | Map */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-16">
        {/* Updates */}
        <div
          className="relative cursor-pointer border rounded-lg overflow-hidden"
          onClick={() => router.push("/news")}
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

        {/* Events */}
        <div
          className="relative border rounded-lg cursor-pointer overflow-hidden"
          onClick={() => router.push("/gallery")}
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

        {/* Map */}
        <div className="relative border rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0335359100195!2d86.43483247479406!3d23.817406486201627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bdc6d2ec5bd5%3A0x2bfd2c67332b57cb!2sKarma%20Jyoti!5e0!3m2!1sen!2sin!4v1722084823868!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px]"
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
