import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import newHeroImg from '../../public/newHeroImg.jpg'
import { motion } from 'framer-motion'
// import trianglemain from '../../public/trianglemain.svg'
// import triangles from '../../public/triangles.svg'


function Hero() {
  return (
    <section id='hero' className='z-10 bg-[#23464F]'>
      
      <div className=" container pt-3 z-10 flex flex-col md:flex-row items-center px-12 pb-20 mx-auto  space-y-0 md:space-y-0 ">
        <div className='mt-5 md:mt-0 flex flex-col space-y-12 md:w-1/2'>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            //className="text-white max-w-lg text-5xl font-bold text-center md:leading-15 md:text-6xl md:text-left"
            className="text-white max-w-[100%] relative top-[0.6rem] text-5xl font-bold text-center md:leading-15 md:text-[3.5rem] md:text-left"
          >
            Transform your future <br className='md:block hidden'/> as a software engineer <br className='md:block hidden'/> with our developer BootCamp
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
            //className="md:max-w-sm text-white text-center md:text-left"
            className="md:max-w-lg text-[1.15rem] text-white text-center md:text-left"
          >
            Join us today and unlock a world of opportunities as a software engineer. Let's build your future together!
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
        <div className='hidden pr-20 md:w-1/2 md:flex justify-end'>
         <div className='relative'>

          <div className='z-[1000] absolute -left-[60px] -top-[20px] w-20 h-20 rounded-t-3xl rounded-bl-3xl bg-[#FF4F4F] '></div>
          <div className='relative overflow-hidden border rounded-bl-[25%]  w-96 h-[20rem]'>
            <div className='absolute -right-[45px]  overflow-hidden w-[480px] '>
              <Image layout='responsive' priority src={newHeroImg}/>
            </div>
          </div>
          <div className='absolute -right-[60px] -bottom-[30px] w-32 h-32 rounded-t-3xl rounded-bl-3xl bg-[#66CEE8] '></div>
         </div>
        </div>
      </div>
      
    </section>
    )
}

export default Hero