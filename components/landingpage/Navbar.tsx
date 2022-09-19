import Image from "next/image";
// import Logo from '../public/grow-logo.png'
import logo from "../../public/grow-logo.png";
import whitelogo from "../../public/whitelogo.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useScrollPosition } from "../../hooks"

interface NavbarProps {
  containerRef: React.RefObject<HTMLDivElement>,
  navTextColor: string,
  logoColor: boolean,
}

function Navbar({ containerRef, navTextColor, logoColor}: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const scrollPosition  = useScrollPosition()
  console.log(scrollPosition)
  const [isDesktop, setDesktop] = useState(() => {
    if (typeof window !== "undefined") {
      const bool = window.innerWidth > 920;
      return bool;
    }
  });

  const updateMedia = () => {
    setDesktop(window.innerWidth > 917);
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }
    // <nav className="sticky container mx-auto p-6">

  });

  return (
    <>
      {isDesktop ? (
        <nav className={classNames(scrollPosition > 0 ? 'sticky bg-main shadow' : 'shadow-none', " transition-shadow container mx-auto p-6 top-0 z-10")}>
          <div className="flex items-center justify-between">
            <div className="pt-2">
              <div className="md:w-[150px] w-[100px] cursor-pointer">
                <Link href="/">
                  {scrollPosition > 0 ? 
                  <Image
                    className="w-[10vw] block"
                    src={whitelogo}
                    alt="Grow"
                    priority
                  />
                    :
                    <Image
                    className="w-[10vw] block"
                    src={logo}
                    alt="Grow"
                    priority
                  />
                  }
                   
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div style={{color: classNames(scrollPosition > 0 ? '#ffffff' : navTextColor)}} className="text-main flex space-x-6 uppercase mr-6">
                <Link href="/programs">Programs</Link>
                <Link href="/our-story">Our Story</Link>
                <Link href="/faqs">FAQs</Link>
              </div>
              <div className="flex">
                <Link href="/register">
                  <div className=" md:block text-white border-none bg-[#66cee8] startedBtn">Register Now</div>
                </Link>
                {/* <Link href="/login">
            <div className=" md:block p-3 px-6 text-black baseline">
                Log in
            </div>
                </Link> */}
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav>
          <div className="flex justify-between container px-4 mx-auto pt-4">
            <div className="pt-2 px-4">
              <div className=" md:w-[150px] w-[100px] cursor-pointer">
                <Link href="/">
                  <Image
                    className="w-[10vw] block"
                    src={whitelogo}
                    alt="Grow"
                    priority
                  />
                </Link>
              </div>
            </div>
            <Button color="#23464f" onClick={onOpen}>
              <HamburgerIcon />
            </Button>
          </div>
          <Drawer
            isOpen={isOpen}
            placement="right"
            finalFocusRef={containerRef}
            // initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">Grow 1.0</DrawerHeader>
              <DrawerBody>
                <Stack spacing="24px">
                  <Link href="/register">
                    <div className="text-white bg-main  border-none md:block startedBtn">
                      Register Now
                    </div>
                  </Link>
                  <Link href="/">
                    <div className=" md:block startedBtn">Home</div>
                  </Link>
                  <Link href="/programs">
                    <div className=" md:block startedBtn">Programs</div>
                  </Link>
                  <Link href="/our-story">
                    <div className=" md:block startedBtn">Our story</div>
                  </Link>
                  <Link href="/faqs">
                    <div className=" md:block startedBtn">FAQs</div>
                  </Link>
                </Stack>
              </DrawerBody>
              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                {/* <Button backgroundColor="#23464f" color="white">
                Login
              </Button> */}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </nav>
      )}
    </>
  );
}
export default Navbar;
