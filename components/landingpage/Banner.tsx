import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import trianglesred from '../../public/trianglesred.svg'

function Banner() {
  return (
    <section id='banner' className='bg-[#66cee8]'>
        <div className="container relative flex flex-col py-28 px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row ">
            <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="text-white max-w-lg text-4xl md:text-5xl font-bold text-center md:text-left">
                    Kickstart your developer journey now!
                </h2>
                <p className="text-white text-lg md:text-xl font-medium text-center md:text-left">
                    Let us help you get started in 6 weeks! Join our entry-level developer bootcamp, and you are good to go!
                </p>
            </div>
            <div className="flex justify-center items-center text-center space-y-12 md:w-1/2">
                <Link href='/programs' passHref>
                    <a href='' className='p-4 px-8 font-regular text-m text-black bg-white baseline hover:scale-105 transition'>Start now!</a>
                </Link>
            </div>
        <div className="absolute md:-top-16 md:w-[500px] w-[400px] -top-24 left-0">
            <Image src={trianglesred} />
        </div>
        </div>
    </section>
    )
}

export default Banner
