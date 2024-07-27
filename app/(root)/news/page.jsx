import Image from 'next/image';
import React from 'react';

function UpdatesPage() {
  return (
    <section className="h-full flex flex-col items-center justify-center bg-[#ffffe0] mt-16 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-[#9b242d] mb-4 max-sm:text-3xl">Latest Updates</h1>
        <p className="text-xl text-gray-700 mt-8">
          There are currently no updates available. Please check back later for the latest news and updates.
        </p>
        <div className="mt-12 flex items-center justify-center">
         <Image src='/images/updated.png' width={100} height={50}/>
        </div>
      </div>
    </section>
  );
}

export default UpdatesPage;
