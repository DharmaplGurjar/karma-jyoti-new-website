
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function Team({ item }) {
  return (
    <div className='border rounded-lg overflow-hidden shadow-lg p-6 bg-white transform transition-transform hover:scale-105 w-full max-w-[280px] mx-auto'>
      
      {/* Profile image */}
      <div className='flex justify-center mb-4'>
        <div className="w-[180px] h-[210px] relative rounded-full overflow-hidden border-1 border-[#9b242d]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className='text-center'>
        <h1 className='text-xl font-bold text-[#9b242d] mb-2'>{item.name}</h1>
        <h2 className='text-md text-gray-700 mb-4'>{item.position}</h2>

        {/* Social icons */}
        <div className='flex justify-center items-center gap-4'>
          {item.fb && (
            <Link href={item.fb} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src='/icons/facebook.png'
                  width={30}
                  height={30}
                  alt='Facebook'
                  className='transition-transform hover:scale-125'
                />
              </a>
            </Link>
          )}
          {item.insta && (
            <Link href={item.insta} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src='/icons/instagram.png'
                  width={30}
                  height={30}
                  alt='Instagram'
                  className='transition-transform hover:scale-125'
                />
              </a>
            </Link>
          )}
          {item.linkdin && (
            <Link href={item.linkdin} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src='/icons/linkedin.png'
                  width={30}
                  height={30}
                  alt='LinkedIn'
                  className='transition-transform hover:scale-125'
                />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Team;
