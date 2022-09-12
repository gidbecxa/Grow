import React from 'react'
import newhero from '../../public/newhero.jpg'
import Image from 'next/image'

const HeroImg = () => {
  return (
    <div className="absolute -z-10">
        <div className="absolute">
            <Image src={newhero} />
        </div>
        <div className="h-screen md:h-[1000px] w-screen bg-main opacity-70"></div>
      </div>
  )
}

export default HeroImg