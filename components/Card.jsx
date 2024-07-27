import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function Card({ item }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg m-4 bg-white transform transition-transform hover:scale-105 lg:w-[350px]">
      <Link href={item.route} legacyBehavior>
        <a className="block">
          <Image
            src={item.image}
            width={400}  // Set appropriate width
            height={200} // Set appropriate height
            alt={item.route}
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <span className="inline-block bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase rounded mb-2">New</span>
            <h2 className="text-xl font-bold text-[#9b242d]">{item.date}</h2>
            <h3 className="text-md text-gray-700">{item.location}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Card;
