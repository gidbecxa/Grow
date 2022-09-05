import React from 'react'

function Banner() {
  return (
    <section id='banner' className='bg-[#66cee8]'>
        <div className="container flex flex-col py-28 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row ">
            <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="text-white max-w-lg text-4xl md:text-5xl font-bold text-center md:text-left">
                    Kickstart your developer journey now!
                </h2>
                <p className="text-white text-lg md:text-xl font-medium text-center md:text-left">
                    Let us help you get started in 6 weeks! Join our entry-level developer bootcamp, and you are good to go!
                </p>
            </div>
            <div className="flex justify-center items-center text-center space-y-12 md:w-1/2">
                <a href='' className='p-4 px-8 font-regular text-m text-black bg-white baseline hover:scale-105 transition'>Start now!</a>
            </div>
        </div>
    </section>
    )
}

export default Banner
