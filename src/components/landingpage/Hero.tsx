import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import newHeroImg from '../../public/newHeroImg.jpg'
import { motion } from 'framer-motion'
// import trianglemain from '../../public/trianglemain.svg'
// import triangles from '../../public/triangles.svg'


function Hero() {
  return (
    <section id='hero' className='z-10 bg-[#0D3B66]'>

      <div className=" container pt-20 z-10 flex flex-col md:flex-row items-center px-12 pb-20 mx-auto  space-y-0 md:space-y-0 ">
        <div className='mt-5 md:mt-0 flex flex-col space-y-12 md:w-2/3'>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            //className="text-white max-w-lg text-5xl font-bold text-center md:leading-15 md:text-6xl md:text-left"
            className="text-white max-w-[100%] relative top-[0.6rem] text-5xl font-bold text-center md:leading-15 md:text-[3.25rem] md:text-left"
          >
            {/* Transformez votre avenir <br className='md:block hidden' />en devenant développeur<br className='md:block hidden' />à l'aide de notre bootcamp pour développeurs */}
            <span className="md:leading-10">
              Transformez votre avenir
              <br className='md:block hidden' />
              en devenant développeur
              <br className='md:block hidden' />
              à l'aide de notre bootcamp pour développeurs
            </span>
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
            className="md:max-w-2xl text-[1.15rem] text-white text-center md:text-left"
          >
            Rejoignez-nous aujourd&apos;hui et accédez à un monde d&apos;opportunités en tant qu&apos;ingénieur logiciel. Ensemble, bâtissons votre avenir !
          </motion.p>
          <div className="flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: .8, duration: .7 }}
            >
              <Link href='/register' passHref>
                <a href="" className="text-white bg-[#20BF55] border-none startedBtn">Rejoignez-nous!</a>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className='hidden pr-20 md:w-1/2 md:flex justify-end'>
          <div className='relative'>

            <div className='z-[999] absolute -left-[60px] -top-[20px] w-20 h-20 rounded-t-3xl rounded-bl-3xl bg-[#FF1F1F] '></div>
            <div className='relative overflow-hidden border-2 border-[#FBFBFF] rounded-bl-[25%] rounded-tr-2xl  w-96 h-[20rem]'>
              <div className='absolute -right-[45px]  overflow-hidden w-[480px]'>
                <Image layout='responsive' priority src={newHeroImg} alt="hero-image" />
              </div>
            </div>
            <div className='absolute -right-[60px] -bottom-[30px] w-32 h-32 rounded-t-3xl rounded-bl-3xl bg-[#01BAEF] '></div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero