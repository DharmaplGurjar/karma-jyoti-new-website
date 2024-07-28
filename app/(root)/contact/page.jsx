"use client"
import React from "react";
import { Button } from "/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  const router=useRouter();
  return (
    <section className="home flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0] min-h-screen py-8 px-4 lg:px-16">
      <div onClick={()=>router.push('/donate')}>
        <Button className="bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 mb-8" >
          🤍 Donate Now!
        </Button>
      </div>

      <h1 className="text-center mt-8 text-3xl font-bold text-[#9b242d] sm:hidden max-sm:hidden lg:block md:block">
        CONTACT US - KARMAJYOTI
      </h1>

      <h1 className="hidden text-center mt-8 text-2xl font-bold text-[#9b242d] sm:block max-sm:block md:hidden">
        CONTACT US
      </h1>

      <div className="grid grid-cols-1">
        <div className="border border-[#9b242d] flex flex-col items-center p-6 mt-8 border-2 rounded-xl gap-4 shadow-lg">
          <h1 className="text-center flex items-center gap-4 text-3xl font-bold">
            <Image
              src="/icons/gmail.png"
              width={50}
              height={50}
              alt="Gmail Icon"
            />
            MAIL US :
          </h1>
          <Link href="mailto:karmajyoti@iitism.ac.in" legacyBehavior>
            <a className="text-2xl text-[#9b242d] font-bold cursor-pointer max-sm:text-[15px] max-sm:whitespace-nowrap">
              Mail ID: karmajyoti@iitism.ac.in
            </a>
          </Link>
        </div>

        <div className="border border-[#9b242d] flex flex-col items-center p-6 mt-8 border-2 rounded-xl gap-8 shadow-lg">
          <h1 className="text-center flex items-center gap-4 text-3xl font-bold max-sm:text-[20px] max-sm:whitespace-nowrap">
            <Image
              src="/icons/bubble-chat.png"
              width={50}
              height={50}
              alt="Gmail Icon"
            />
            CHAT WITH US :
          </h1>
          <Link href="mailto:karmajyoti@iitism.ac.in" legacyBehavior>
            <a className="text-2xl text-[#9b242d] font-bold cursor-pointer max-sm:text-xl flex items-center gap-4 max-sm:text-[14px] max-sm:whitespace-nowrap overflow-hidden">
              <Image src="/icons/whatsapp.png" width={40} height={30} />
              whatsapp group
            </a>
          </Link>
          <Link href="https://t.me/karmajyoti_iitism" legacyBehavior>
            <a className="text-2xl text-[#9b242d] font-bold cursor-pointer max-sm:text-xl flex items-center gap-4 max-sm:text-[15px] max-sm:whitespace-nowrap">
              <Image src="/icons/telegram.png" width={40} height={30} />
              Telegram group 
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Page;
