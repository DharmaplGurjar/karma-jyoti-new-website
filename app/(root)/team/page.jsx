"use client";

import React from "react";
import { Button } from "/components/ui/button";
import { useRouter } from "next/navigation";
import { team } from "/sections";
import Team from "/components/Team";

function Page() {
  const router = useRouter();

  return (
    <section className="home flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0] min-h-screen p-8">
      <div onClick={() => router.push("/donate")}>
        <Button className="bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 mb-8  max-[380px]:text-xl">
          🤍 Donate Now!
        </Button>
      </div>

      <h1 className="text-center mt-8 text-3xl font-bold text-[#9b242d] max-sm:text-2xl  max-[380px]:text-sm">
        KARMAJYOTI-TEAM
      </h1>


      {/* main-team */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8  max-[380px]:w-[200px] max-[380px]:ml-[-20px]">
        {team.slice(0, 3).map((item) => (
          <Team key={item.name} item={item} />
        ))}
      </div>
      <h1 className="text-center items-center text-5xl font-bold text-[#9b242d] md:text-4xl max-sm:text-3xl mt-4 mb-4">
        HEADS
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 max-[380px]:ml-[-20px]">
        {team.slice(3, 5).map((item) => (
          <Team key={item.name} item={item} />
        ))}
      </div>


      {/* co-ordinaters */}

      <h1 className="text-center items-center text-5xl font-bold text-[#9b242d] md:text-4xl max-sm:text-2xl mt-4 mb-4">
        CO-ORDINATORS
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 max-[380px]:ml-[-20px]">
        {team.slice(6, 12).map((item) => (
          <Team key={item.name} item={item} />
        ))}
      </div>


   {/* media and branding team */}

      <h1 className="text-center items-center text-5xl font-bold text-[#9b242d] md:text-4xl max-sm:text-2xl mt-4 mb-4">
        MEDIA & BRANDING
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 max-[380px]:ml-[-20px] max-[380px]:w-[200px]">
        {team.slice(12, 17).map((item) => (
          <Team key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Page;
