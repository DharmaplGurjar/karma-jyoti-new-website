import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="home flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0] min-h-screen">
      <h1 className="text-center mt-8 text-3xl font-bold text-[#9b242d] sm:hidden max-sm:hidden lg:block md:block">
        DONATION UPI - KARMAJYOTI
      </h1>

      <h1 className="hidden text-center mt-8 text-3xl font-bold text-[#9b242d] sm:block max-sm:block md:hidden">
        DONATION UPI
      </h1>

      <div className=" border-[#9b242d] flex flex-col items-center p-6 mt-8 border-2 rounded-xl gap-8 shadow-lg">
        <Image
          src="/images/scanner.jpg"
          width={350}
          height={50}
          alt="scanner"
        />
        <h2 className="font-bold text-2xl text-center text-[#9b242d]">
          KARMAJYOTI
        </h2>
        <h2 className="text-2xl text-center font-bold text-[#9b242d]">
          karmajyoti@sbi
        </h2>
      </div>



      <div className=" border-[#9b242d] flex flex-col items-center p-6 mt-8 border-2 rounded-xl gap-8 shadow-lg">
       
        <h2 className="font-bold text-md text-center text-[#9b242d]">
        Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.
        </h2>
        <h3 className=" relative left-28 text-lg text-[#9b242d] max-sm:ml-[-80px]">~Buddha</h3>
        
      </div>
    </section>
  );
}

export default page;
