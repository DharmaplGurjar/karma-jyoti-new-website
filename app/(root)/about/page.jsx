"use client";
import React, { useEffect } from "react";
import { Button } from "/components/ui/button";
import { useRouter } from "next/navigation";

function Page() {
  const router=useRouter()
  useEffect(() => {
      const trackVisit = async () => {
        try {
          await fetch("/api/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ page: "About" }),
          });
        } catch (error) {
          console.error("Tracking error:", error);
        }
      };
  
  
      trackVisit();
      
    }, []);
  return (
    <section className="home flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0] min-h-screen mt-8 ">
      <div onClick={()=>router.push('/donate')}>
        <Button className="bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 mb-8 max-[380px]:text-sm">
          🤍 Donate Now!
        </Button>
      </div>

      <h1 className="text-center text-4xl text-[#9b242d] font-bold mt-4 sm:hidden max-sm:hidden lg:block md:block">
        ABOUT US - KARMAJYOTI
      </h1>

      <h1 className="hidden text-center text-4xl text-[#9b242d] font-bold mt-4 sm:block max-sm:block lg:hidden md:hidden">
        ABOUT US
      </h1>

      <div className="border border-[#9b242d] flex flex-col items-center p-4 mt-8 border-2 rounded-xl gap-6">
        <h1 className="font-bold text-2xl">KARMAJYOTI:</h1>
        <h2 className="text-lg text-[#9b242d] font-bold">
          Karma Jyoti Is A Not-For-Profit Group Functional In Dhanbad, Jharkhand
          Which Was Formed By A Group Of Scholars Of Indian Institute Of
          Technology (Indian School Of Mines), Dhanbad On 20th February, 2015
          With The Aim Towards Uplifting The Society From The Very Basic Aspects
          Like Education, Healthcare, Sports And Art And Culture Through Free
          Teaching And Social Awareness.
        </h2>
        <h2 className="text-lg text-[#9b242d] font-bold">
          It Has Been Approved To Be One Of The Functional Groups Under The
          Centre Of Societal Mission (CSM), Indian Institute Of Technology
          (Indian School Of Mines), Dhanbad W.E.F. 27/04/2015
        </h2>
      </div>

      <div className="border border-[#9b242d] flex flex-col items-center p-4 mt-8 border-2 rounded-xl gap-6">
        <h1 className="font-bold text-2xl">VISION:</h1>
        <h2 className="text-lg text-[#9b242d] font-bold">
          Karma Jyoti Envisions Enlightening The Lives Of Indigent And
          Marginalized Section Of The Society.
        </h2>
      </div>

      <div className="border border-[#9b242d] flex flex-col items-center p-4 mt-8 border-2 rounded-xl gap-6">
        <h1 className="font-bold text-2xl">MISSION:</h1>
        <h2 className="text-lg text-[#9b242d] font-bold">
          Karma Jyoti Aims To Alleviate The Lives Of Underprivileged Children
          And Youth Of The Society Through Education, Healthcare And Skill
          Development Programs Notwithstanding Caste, Gender, Race, Religion, Or
          Political Affiliation.
        </h2>
      </div>

      <div className=" border-[#9b242d] flex flex-col items-center p-4 mt-8 border-2 rounded-xl gap-6">
        <h1 className="font-bold text-2xl">OBJECTIVES:</h1>
        <h2 className="text-lg text-[#9b242d] font-bold">
          ⦿ To Provide Quality Education To Underprivileged Children In The
          Society.
        </h2>
        <h2 className="text-lg text-[#9b242d] font-bold">
          ⦿ To Provide Comprehensive Solutions To Address Public Health
        </h2>

        <h2 className="text-lg text-[#9b242d] font-bold">
          ⦿ To Provide Facility For Sports, Art And Cultural Activities To
          Indigent/Underprivileged.
        </h2>
        <h2 className="text-lg text-[#9b242d] font-bold">
          ⦿ To Provide Easy And Direct Access To Information For Semi-Skilled
          Training (RSETIs) To The Underprivileged Youth For Livelihood.
        </h2>
      </div>

      <h1 className="text-5xl text-[#9b242d] font-bold mt-16 text-center max-sm:text-3xl max-sm:shadow-md max-sm:shadow-[#9b242d] mb-4">
        ACTIVE CENTRES
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center gap-8">
        <div className=" border-[#9b242d] flex flex-col items-center p-4 mt-8 border-2 rounded-xl gap-6">
          <h1 className="text-2xl text-center font-bold">NLHC IIT(ISM):</h1>
          <h2 className="text-center font-bold text-[#9b242d]">
            School Class 9th And 10th
          </h2>
        </div>

        <div className=" border-[#9b242d] flex flex-col items-center p-4 mt-8 border-2 rounded-xl gap-6">
          <h1 className="text-2xl text-center font-bold">HIRAPUR:</h1>
          <h2 className="text-center font-bold text-[#9b242d]">
          Hindu Mission Orphanage Class 8th To 12th
          </h2>
        </div>

        <div className=" border-[#9b242d] flex flex-col items-center p-4 mt-8 border-2 rounded-xl gap-4">
          <h1 className="text-2xl text-center font-bold">SAC IIT(ISM):</h1>
          <h2 className="text-center font-bold text-[#9b242d]">
          Class 11th, 12th And IIT-JEE
          </h2>
        </div>

        <div className=" border-[#9b242d] flex flex-col items-center p-4 mt-8 border-2 rounded-xl gap-6">
          <h1 className="text-2xl text-center font-bold">BAGULA BASTI:</h1>
          <h2 className="text-center font-bold text-[#9b242d]">
          Primary School
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Page;
