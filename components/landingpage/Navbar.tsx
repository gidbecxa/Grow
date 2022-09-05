import Image from 'next/image'
// import Logo from '../public/grow-logo.png'
import logo from '../../public/grow-logo.png'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="relative container mx-auto p-6">
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
            <div className='md:w-[250px] w-[200px] cursor-pointer'>
          <Link href='/'>
              <Image
                className="w-[10vw] block"
                src={logo}
                alt="Grow"
                priority
              />
          </Link>
            </div>
        </div>
        <div className='hidden md:flex space-x-6 uppercase'>
          <Link href='/courses'>Programs</Link>
          <Link href='/pricing'>Our Story</Link>
          <Link href='/faqs'>FAQs</Link>
        </div>
        <div className='flex'>
            <div className='hidden md:block startedBtn'>
          <Link href='/signup'>
              Register for free
          </Link>
            </div>
            <div className='hidden md:block p-3 px-6 text-black baseline'>
          <Link href='/login'>
              Log in
          </Link>
            </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar