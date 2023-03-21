import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import communitysection from "../../public/communitysection.jpg";
import { useAtom } from "jotai"
import { autofillAtom } from "../../pages";
import triangles from "../../public/triangles.svg";
import {
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'


const CommunityHeaderVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: .8 } },
  hidden: { opacity: 0, x: -10 }
}

const headerCaptionVariants = {
  visible: { x: 0, opacity: 1, transition: { delay: .1, duration: .5 } },
  hidden: { opacity: 0, x: -10 }
}

const headerButtonVariants = {
  visible: { x: 0, opacity: 1, transition: { delay: .1, duration: .5 } },
  hidden: { opacity: 0, x: 10 }
}

const Community = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { inView, ref } = useInView()
  const controls = useAnimation()
  const [autofill, setAutofill] = useAtom(autofillAtom)

  const SendAutofill = () => {
    console.log("work mffffffffffffffffffffffffffffff")
    setAutofill("Bonjour! Je suis Gideon de Cotonou. J'aimerais faire partir de votre communauté de développeur.")
    console.log(autofill)
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }

  }, [inView, controls])

  return (
    <>
      <section id="community" className="bg-[#FFDD00]">
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Join our Community in Grow</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>
                Grow will send you lots of resources to kickstart your career.You&apos;ll be invited to our Telegram and Discord channels
              </p>
              <div className="mt-4">
                <FormControl>
                  <Input type='email' />
                  <FormHelperText>Enter your email</FormHelperText>
                </FormControl>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Submit
              </Button>
              {/* <Button variant='ghost'>Cancel</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* <div className=" flex flex-row-reverse container mx-auto py-20 ">
          <div className="md:ml-16 flex items-center flex-col space-y-12 md:w-1/2 flex md:justify-center">
            <h2 className="text-main max-w-md text-4xl font-bold text-center md:text-left">
              Join the Grow Community
            </h2>
            <p className="md:max-w-sm text-center text-main md:text-left">
              Grow is the leading software developement school and community for
              French-speaking Africans. We are commited to helping millions of
              francophones with little to no coding experience become world-class
              certified software engineers.
            </p>
            <div>
              <button onClick={onOpen} className='startedBtn text-white bg-main'>Join the Grow Community!</button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 m-10 ">
            <div className="w-[500px] relative">
              <Image
                layout="responsive"
                priority
                src={communitysection}
                objectFit="cover"
                alt="group of people"
              />
              <div className="absolute w-[60px] top-0 -left-8 md:block hidden">
                <Image src={triangles} priority />
              </div>
              <div className="absolute w-[60px] bottom-6 -right-8 md:block hidden ">
                <Image priority src={triangles} />
              </div>
            </div>
          </div>
          </div> */}
        <div className="container relative flex flex-col py-28 px-12 mx-auto mt-10 md:mt-32 space-y-12 md:space-y-0 md:flex-row ">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <motion.h2
              ref={ref}
              initial='hidden'
              variants={CommunityHeaderVariants}
              animate={controls}
              className="text-[#222222] max-w-lg text-4xl md:text-5xl font-bold text-center md:text-left"
            >
              Rejoignez la communauté Grow
            </motion.h2>
            <motion.p
              initial='hidden'
              variants={headerCaptionVariants}
              animate={controls}
              className="text-[#222222] text-lg md:text-lg font-medium text-center md:text-left">
              Rejoignez notre communauté aujourd&apos;hui et ouvrez<br />  votre potentiel pour faire partie de la prochaine génération<br /> de responsables technologiques africains !
            </motion.p>
          </div>
          <div className="flex justify-center md:justify-end items-center text-center space-y-12 md:w-1/2">
            <motion.div

              initial='hidden'
              variants={headerButtonVariants}
              animate={controls}
            >
              <Link href='/contact'>
                <button
                  onClick={SendAutofill}
                  // onClick={onOpen}
                  className='bg-[#0D3B66] startedBtn text-[#FBFBFF] border-none mr-2' >
                 Rejoignez nous
                </button>
              </Link>
            </motion.div>
          </div>
          <div className="absolute md:-top-16 md:w-[500px] w-[400px] -top-24 left-0">
            {/* <Image src={trianglesred} /> */}
          </div>
        </div>
      </section>
    </>
  )
};

export default Community;
