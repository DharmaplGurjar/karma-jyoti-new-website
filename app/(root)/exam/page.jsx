"use client";
import React from "react";
import { Button } from "/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";


function Page() {
  const router = useRouter();
  return (
    <>
      <section className="home flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0] min-h-screen">
        
        <div onClick={() => router.push('/donate')}>
          <Button className="bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 mb-8 mt-4">
            🤍 Donate Now!
          </Button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center mt-16 max-sm:w-[350px] max-sm:ml-[-40px]">
          <h1 className="text-4xl font-bold text-[#9b242d] mb-4 max-sm:text-3xl">EXAMS</h1>
          
          <p className="text-xl text-[#9b242d] mt-8">
            🎉 Congratulations to all the selected students! | 
            <a href="https://drive.google.com/uc?export=download&id=1bHhL7cOi7O7K9g0i0Kf3MiTpyVtghxZR" className="text-green-600 underline mx-1">
              Download the Result here
            </a> 
            | Document verification date will be announced soon! | 
            For 9th and 10th grade students. 
            <a href="https://drive.google.com/uc?export=download&id=1bSWBXLMjJHM9LOpyNcI-Q3cpi_mfgsG6" className="text-green-600 underline mx-1">
              Download the 9th and 10th Student List here
            </a>
          </p>

          

          <div className="mt-12 flex items-center justify-center">
            <Image src='/icons/exam.png' width={100} height={50} alt="Exams Icon"/>
          </div>
        </div>

      </section>

     
     
    </>
  );
}

export default Page;
