import Image from "next/image";
// import Logo from '../public/grow-logo.png'
import logo from "../../public/grow-logo.png";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <div className="md:w-[150px] w-[100px] cursor-pointer">
            <Link href="/">
              <Image
                className="w-[10vw] block"
                src={logo}
                alt="Grow"
                priority
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex space-x-6 uppercase mr-6">
            <Link href="/courses">Programs</Link>
            <Link href="/pricing">Our Story</Link>
            <Link href="/faqs">FAQs</Link>
          </div>
          <div className="flex">
            <div className="hidden md:block startedBtn">
              <Link href="/register">Register</Link>
            </div>
            <div className="hidden md:block p-3 px-6 text-black baseline">
              <Link href="/login">Log in</Link>
            </div>
          </div>
        </div>
        <button
          id="menu-btn"
          className="block hamburder md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex flex-col items-center hidden self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <div className=" md:flex space-x-6 uppercase mr-6">
        
              <Link href="/courses">Programs</Link>
              <Link href="/pricing">Our Story</Link>
              <Link href="/faqs">FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
