import React from 'react'

function Hero() {
  return (
    <section id='hero'>
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className="text-main max-w-lg text-3xl font-bold text-center md:text-5xl md:text-left">
            Creating opportunites for the aspiring software engineer
          </h1>
          <p className="md:max-w-sm text-main text-center md:text-left">Join our leading intensive bootcamp to get started on your journey to become a professional developer</p>
          <div className="flex justify-center md:justify-start">
        <a href='' className='startedBtn'>Get started</a>
          </div>
        </div>
        <div className='md:w-1/2'>
          {/* <img src="" alt="hero-img" /> */}
        </div>
      </div>
      
    </section>
    )
}

export default Hero