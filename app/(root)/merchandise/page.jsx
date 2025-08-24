"use client";
import React, { useEffect } from "react";
import { Button } from "/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";


function Page() {
  const router = useRouter();
 
  return (
    <>
      <section className="home flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0] min-h-screen">
        
        <div onClick={() => router.push('/donate')}>
          <Button className="bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 mb-8 mt-4 max-[380px]:text-xl">
            🤍 Donate Now!
          </Button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center mt-16 max-sm:w-[350px] max-sm:ml-[-40px] max-[380px]:w-[300px]">
          <h1 className="text-4xl font-bold text-[#9b242d] mb-4 max-sm:text-3xl">Merchandise</h1>
          
         
          <Image src='/icons/tee-poster.png' width={200} height={1000} alt="Merchandise Poster"/>


        </div>

      </section>

     
     
    </>
  );
}

export default Page;
