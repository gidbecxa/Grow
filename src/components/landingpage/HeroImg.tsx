import React from 'react'
import Image from 'next/image'

const HeroImg = ({src}) => {
  return (
    <div className="sticky absolut top-0 -z-10 overflow-x-hidden">
        <div className="absolute  w-full h-full">
            <div className=" w-full h-full">
              <Image
              priority
              layout='fill'
              src={src}
              objectFit='cover'
              objectPosition='left bottom'
              alt="image-on-h ero"
              />
            </div>
        </div>
        <div className="h-screen md:h-[1000px] w-screen bg-main opacity-70"></div>
      </div>
  )
}

export default HeroImg