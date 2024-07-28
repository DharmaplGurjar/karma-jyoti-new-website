"use client";

import React from "react";
import { Button } from "/components/ui/button";
import { useRouter } from "next/navigation";
import { alumni } from "/sections";
import Team from "/components/Team";

function Page() {
  const router = useRouter();

  return (
    <section className="home flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0] min-h-screen p-8">
      <div onClick={() => router.push("/donate")}>
        <Button className="bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 mb-8">
          🤍 Donate Now!
        </Button>
      </div>

      <h1 className="text-center mt-8 text-4xl font-bold text-[#9b242d]">
        ALUMNI-TEAM
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {alumni.map((item) => (
          <Team key={item.name} item={item} />
        ))}
      </div>
     


     

    </section>
  );
}

export default Page;
