import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function Team({ item }) {
  return (
    <div className='flex justify-center py-8'>
      <div className='border rounded-lg overflow-hidden shadow-lg p-6 bg-white transform transition-transform hover:scale-105 lg:w-[400px] cursor-pointer max-sm:w-[330px] max-sm:ml-[-30px] sm:w-[300px]'>
        <div className='flex justify-center mb-4'>
          <Image src={item.image} width={150} height={150} alt={item.name} className='rounded-full' />
        </div>
        <div className='text-center'>
          <h1 className='text-xl font-bold text-[#9b242d] mb-2'>{item.name}</h1>
          <h2 className='text-md text-gray-700 mb-4'>{item.position}</h2>
          <div className='flex justify-center items-center gap-4'>
            <Link href={item.fb} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src='/icons/facebook.png' width={30} height={30} alt='Facebook' className='transition-transform transform hover:scale-125' />
              </a>
            </Link>
            <Link href={item.insta} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src='/icons/instagram.png' width={30} height={30} alt='Instagram' className='transition-transform transform hover:scale-125' />
              </a>
            </Link>
            <Link href={item.linkdin} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src='/icons/linkedin.png' width={30} height={30} alt='LinkedIn' className='transition-transform transform hover:scale-125' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
