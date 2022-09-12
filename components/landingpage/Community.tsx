import React from "react";
import Image from "next/image";
import communitysection from "../../public/communitysection.jpg";
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
const Community = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <section id="community" className="bg-[66cee8]">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
      <ModalHeader>Join our Community in Grow</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <p>
          Grow will send you lots of resources to kickstart your career.You&apos;ll be invited to our Telegram and Discord channels
        </p>
      <FormControl>
  <Input type='email' />
  <FormHelperText>Enter your email</FormHelperText>
</FormControl>
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
    </>
  )
};

export default Community;
