
import React from 'react'
import Image from 'next/image'

export default function NavBar() {
  return (
    <div className="h-32 bg-white border flex justify-evenly  gap-10 items-center">
      <div className="flex gap-14 justify-center items-center font-bold uppercase">
    
      <Image
        // Absolute URL
        src="/nav-logo.png"
        alt=" "
        width={100}
        height={100}
      />
        <h3 className='pt-1 hover:cursor-pointer'>Personal</h3>
        <h3 className='pt-1 hover:cursor-pointer'>Business</h3>
      </div>

      <div className='flex gap-10 justify-center items-center font-bold uppercase'>
        <h3 className='pt-1 hover:cursor-pointer '>About</h3>
        <h3 className='pt-1 hover:cursor-pointer '>Careers</h3>
        <h3 className='pt-1 hover:cursor-pointer '>Blog</h3>
      </div>
    </div>
  );
}
