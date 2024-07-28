"use client";
import React from "react";
import { Button } from "/components/ui/button";
import { gallery } from "/sections";
import Card from "/components/Card";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Page() {
  const router=useRouter();
  return (
    <>
      <section className="home flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0] min-h-screen">
        <div onClick={()=>router.push('/donate')}>
          <Button className="bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 mb-8 max-[380px]:text-xl">
            🤍 Donate Now!
          </Button>
        </div>

        <h1 className="text-center mt-8 text-3xl font-bold text-[#9b242d] sm:hidden max-sm:hidden lg:block md:block">
          STUDENT-NOTES - KARMAJYOTI
        </h1>

        <h1 className="hidden text-center mt-8 text-3xl font-bold text-[#9b242d] sm:block max-sm:block md:hidden max-[380px]:text-xl">
          NOTES-CORNER
        </h1>


        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center mt-16 max-sm:w-[350px] max-sm:ml-[-40px] max-[380px]:w-[300px]">
        <h1 className="text-4xl font-bold text-[#9b242d] mb-4 max-sm:text-3xl">Latest Notes</h1>
        <p className="text-xl text-gray-700 mt-8">
          There are currently no Notes available. Please check back later for the latest Notes and updates.
        </p>
        <div className="mt-12 flex items-center justify-center">
         <Image src='/icons/pencil.png' width={100} height={50}/>
        </div>
      </div>

    
      </section>
    </>
  );
}

export default Page;
