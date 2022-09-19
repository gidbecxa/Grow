import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import hero from '../../public/hero.svg'
import { motion } from 'framer-motion'
// import trianglemain from '../../public/trianglemain.svg'
// import triangles from '../../public/triangles.svg'


function Hero() {
  return (
    <section id='hero' className='z-10'>
      
      <div className="container z-10 flex flex-col-reverse md:flex-row items-center px-6 pb-20 mx-auto mt-10 space-y-0 md:space-y-0 ">
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="text-white max-w-lg text-5xl font-bold text-center md:leading-15 md:text-6xl md:text-left"
          >
            Creating opportunites <br/> for the aspiring <br/> software engineer
          </motion.h1>
          {/* <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="text-white max-w-lg text-5xl font-bold text-center md:leading-15 md:text-6xl md:text-left"
          >
            for the aspiring
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="text-white max-w-lg text-5xl font-bold text-center md:leading-15 md:text-6xl md:text-left"
          >
            software engineer
          </motion.h1> */}
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .5, duration: .7 }}
            className="md:max-w-sm text-white text-center md:text-left"
          >
            Join our leading intensive bootcamp to get started on your journey to become a professional developer
          </motion.p>
          <div className="flex justify-center md:justify-start">
        <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .8, duration: .7 }}
        >
          <Link href='/programs' passHref>
            <a href="" className="text-white bg-[#66cee8] border-none startedBtn">Join now!</a>
          </Link>
        </motion.div>
          </div>
        </div>
        <div className='md:w-1/2 flex justify-end'>
          <div className="md:w-[450px] md:relative">
            <div className="w-full h-full">
              {/* <Image
              layout='responsive'
                priority
                src={hero}
              objectFit='cover'
              /> */}
            </div>
            {/* <div className="absolute w-[60px] top-0 -left-8 md:block hidden">
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
            </div> */}
          </div>
        </div>
      </div>
      
    </section>
    )
}

export default Hero