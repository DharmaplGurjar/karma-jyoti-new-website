"use client";
import React from "react";
import { Button } from "/components/ui/button";
import { gallery } from "/sections";
import Card from "/components/Card";
import { useRouter } from "next/navigation";


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
          OUR PHOTO GALLERY - KARMAJYOTI
        </h1>

        <h1 className="hidden text-center mt-8 text-2xl font-bold text-[#9b242d] sm:block max-sm:block md:hidden max-[380px]:text-xl">
          OUR PHOTO GALLERY
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 p-4 max-sm:w-[400px] max-sm:ml-[-60px] max-[380px]:w-[300px] max-[380px]:ml-[-30px]">
          {gallery.map((item) => (
            <Card key={item.route} item={item} />
          ))}
        </div>
        
      </section>
     
    </>
    
  );
}

export default Page;
