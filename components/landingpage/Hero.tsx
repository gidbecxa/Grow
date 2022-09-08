import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import hero from '../../public/hero.jpg'
import trianglemain from '../../public/trianglemain.svg'
import triangles from '../../public/triangles.svg'


function Hero() {
  return (
    <section id='hero'>
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 ">
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h1 className="text-main max-w-lg text-5xl font-bold text-center md:leading-15 md:text-6xl md:text-left">
            Creating opportunites <br/>for the aspiring <br/>software engineer
          </h1>
          <p className="md:max-w-sm text-main text-center md:text-left">Join our leading intensive bootcamp to get started on your journey to become a professional developer</p>
          <div className="flex justify-center md:justify-start">
        <Link href='/programs' passHref>
          <a href="" className="startedBtn">Explore our programs!</a>
        </Link>
          </div>
        </div>
        <div className='md:w-1/2 flex justify-end'>
          <div className="md:w-[450px] border-[rgb(35,70,79)] border-3 md:relative">
            <div className="w-full h-full">
              <Image
              layout='responsive'
                priority
                src={hero}
                objectFit='cover'
              />
            </div>
            <div className="absolute w-[60px] top-0 -left-8 md:block hidden">
            <Image
                src={triangles}
                priority
                />
            </div>
            <div className="absolute w-[60px] bottom-6 -right-8 md:block hidden ">
              <Image
                priority
                src={triangles}
                />
            </div>
          </div>
        </div>
      </div>
      
    </section>
    )
}

export default Hero