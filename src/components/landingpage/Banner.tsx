import Link from 'next/link'
import React, {useEffect} from 'react'
import Image from 'next/image'
import trianglesred from '../../public/trianglesred.svg'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const bannerHeaderVariants = {
    visible: { x: 0, opacity: 1, transition: {duration: .8} },
    hidden: {opacity: 0, x: -10}
}

const headerCaptionVariants = {
    visible: { x: 0, opacity: 1, transition: {delay: .1, duration: .5} },
    hidden: {opacity: 0, x: -10}
}

const headerButtonVariants = {
    visible: { x: 0, opacity: 1, transition: {delay: .1, duration: .5} },
    hidden: {opacity: 0, x: 10}
}

function Banner() {
    const {inView, ref} = useInView()
    const controls = useAnimation()

    useEffect(( ) => {
        if (inView) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }

    },[inView, controls])


  return (
    <section  id='banner' className='bg-[#01BAEF]'>
        <div  className="container relative flex flex-col py-28 px-4 mx-auto  space-y-12 md:space-y-0 md:flex-row ">
            <div className="flex flex-col space-y-12 md:w-1/2">
                <motion.h2
                ref={ref}
                    initial='hidden'
                    variants={bannerHeaderVariants}
                    animate={controls}
                    className="text-white max-w-lg text-4xl md:text-5xl font-bold text-center md:text-left"
                >
                    Commencez dès maintenant votre parcours de développeur !
                </motion.h2>
                <motion.p 
                initial='hidden'
                variants={headerCaptionVariants}
                animate={controls}
                className="text-white text-lg md:text-xl font-medium text-center md:text-left">
                    Laissez-nous vous aider à démarrer votre parcours pour devenir un ingénieur logiciel de classe mondiale !
                </motion.p>
            </div>
            <div className="flex justify-center md:justify-end items-center text-center space-y-12 md:w-1/2">
                <motion.div
                
                 initial='hidden'
                 variants={headerButtonVariants}
                 animate={controls}
                >
                    <Link href='/register' passHref>
                        <a href='' className='rounded-lg p-4 px-8 font-regular text-m text-black bg-white baseline mr-10  hover:scale-105 transition'>Inscrivez-vous!</a>
                    </Link>
                </motion.div>
            </div>
        {/* <div className="absolute md:-top-16 md:w-[500px] w-[400px] -top-24 left-0">
            <Image src={trianglesred} />
        </div> */}
        </div>
    </section>
    )
}

export default Banner
