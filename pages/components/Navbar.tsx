import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="relative container mx-auto p-6">
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <Link href='/'><img src="" alt='the logo img' /></Link>
        </div>
        <div className='hidden md:flex space-x-6 uppercase'>
          <Link href='/courses'>Courses</Link>
          <Link href='/pricing'>Pricing</Link>
          <Link href='/faqs'>FAQs</Link>
        </div>
        <div className='flex'>
          <Link href='app/signup'>
            <div className='hidden md:block startedBtn'>Get Started</div>
          </Link>
          <Link href='app/login'>
            <div className='hidden md:block p-3 px-6 text-black baseline'>Log in</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar