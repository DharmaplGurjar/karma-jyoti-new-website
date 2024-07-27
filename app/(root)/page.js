import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <section className='home h-screen flex flex-col gap-4 rounded-[20px] border m-0 bg-[#ffffe0]'>
      <div>
        <Button className='bg-[#9b242d] text-white rounded-full w-full h-[60px] text-3xl hover:bg-[#9b242d] p-8 mb-8'>
          🤍 Donate Now!
        </Button>
      </div>

      <div className='hidden lg:block md:block relative w-full  mt-8'>
        <Image 
          src='/images/jumbotron_1200.jpg' 
          width={1200}
          height={800}
          alt='image'
          className='shadow-xl shadow-[#9b242d] rounded-lg'
        />
      </div>


      <div className='hidden sm:block max-sm:block mt-8 max-sm:w-[280px] max-sm:h-[100px]'>
        <Image 
          src='/images/jumbotron_768.jpg' 
          width={800}
          height={400}
          alt='image'
          className='shadow-xl shadow-[#9b242d] rounded-lg'
        />
      </div>
      



      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 flex-wrap gap-4 mt-16 py-16'>
        
        <div className='relative border rounded-lg overflow-hidden'>
          <Image 
            src='/images/news.png'
            width={500}
            height={300}
            alt='image'
            className='w-full h-full object-cover'
          />
          <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2'>
            <h1 className='text-2xl'>NEWS</h1>
          </div>
        </div>
        
        <div className='relative border rounded-lg overflow-hidden'>
          <Image 
            src='/images/events.jpg'
            width={700}
            height={400}
            alt='events'
            className='w-full h-full object-cover'
          />
          <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2'>
            <h1 className='text-2xl'>EVENTS</h1>
          </div>
        </div>

        <div className='relative border rounded-lg overflow-hidden'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5642620364657!2d86.43148641461025!3d23.81155649224782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd97b788817f%3A0x98e6d8c6bd1cb8aa!2sKarma%20Jyoti!5e0!3m2!1sen!2sin!4v1657296581208!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='w-full h-full'
          />
          <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2'>
            <h1 className='text-2xl'>MAP</h1>
          </div>
        </div>
        
      </div>
    </section>

    
  );
}

export default Home;
