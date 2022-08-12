import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <nav className="relative container mx-auto p-6">
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <Image src="" alt='the image logo' />
        </div>
        <div className='hidden md:flex space-x-6'>
          <a href=''className='hover:text-black'>Product</a>
          <a href=''>Pricing</a>
          <a href=''>About us</a>
        </div>
        <a href='' className='hidden md:block p-3 px-6 pt-2 text-white bg-slate-800 rounded-full baseline hover:bg-slate-700'>Get started</a>
      </div>
    </nav>
  )
}
export default Navbar