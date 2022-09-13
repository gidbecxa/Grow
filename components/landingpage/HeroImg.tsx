import React from 'react'
import newhero from '../../public/newhero.jpg'
import Image from 'next/image'

const HeroImg = () => {
  return (
    <div className="absolute -z-10 overflow-x-hidden">
        <div className="absolute  w-full h-full">
            <div className=" w-full h-full">
              <Image
              priority
              layout='fill'
              src={newhero}
              objectFit='cover'
              />
            </div>
        </div>
        <div className="h-screen md:h-[1000px] w-screen bg-main opacity-70"></div>
      </div>
  )
}

export default HeroImg