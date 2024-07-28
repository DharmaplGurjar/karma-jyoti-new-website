"use client";
import Image from "next/image";
import React from "react";
import { Button } from "/components/ui/button"
import Mail from "/components/Mail";
import { useRouter } from "next/navigation";

function Home() {
  const router=useRouter();
  return (
    <section className="home h-screen flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0]">
      <div onClick={()=>router.push('/donate')}>
        <Button className="bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 mb-8">
          🤍 Donate Now!
        </Button>
        
      </div>

      <div className="relative w-full  mt-8 max-sm:mb-[-50px]">
        <Image
          src="/images/jumbotron_1200.jpg"
          width={1200}
          height={800}
          alt="image"
          className="shadow-xl shadow-[#9b242d] rounded-lg"
        />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 flex-wrap gap-8 mt-16 py-16">
        <div className="relative cursor-pointer border rounded-lg overflow-hidden" onClick={()=>router.push('/news')}>
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

        <div className="relative border rounded-lg cursor-pointer overflow-hidden" onClick={()=>router.push('/gallery')}>
          <Image
            src="/images/events.jpg"
            width={700}
            height={400}
            alt="events"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-50 text-white text-center p-2" >
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

