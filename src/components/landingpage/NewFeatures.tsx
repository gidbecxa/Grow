import React from 'react'
import workout from "../../public/workout.png"
import Image from 'next/image'
import suitcase from "../../public/suitcase.png"
import community from "../../public/crowd-of-users.png"
import rating from "../../public/rating.png"

const NewFeatures = () => {
  return (
    <section>
      {/* <div className='container flex flex-col px-4 mx-auto pt-10 mb-20 space-y-12 md:space-y-0 md:flex-row'> */}
      <div className="container flex flex-col px-12 mx-auto pt-10 mb-20 space-y-12 md:space-y-0 md:flex-row">
        <div className='flex justify-center flex-col space-y-12 md:w-[40%]'>
          <h1 className='text-main max-w-md text-4xl font-bold text-center md:text-left '>Stand out with Grow: What sets us apart</h1>
          {/* <p className='md:max-w-sm text-center text-main md:text-left'>Grow is the leading software developement school and community for French-speaking Africans. We are commited to helping millions of francophones with little to no coding experience become world-class certified software engineers.</p> */}
        </div>
        <div className='flex  flex-wrap gap-12 md:w-[60%] justify-center md:justify-end'>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center gap-10 bg-[#FFBDBD]'>
            {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={workout}
                  />
                </div> */}
            <h2 className='font-semibold'>Unlock your potential and build a thriving career in Tech</h2>
            <p className='text-xs'>
              Looking to kickstart your career as a software engineer? Our bootcamps offer a comprehensive learning experience that equips you with the skills and knowledge you need to succeed in tech.
            </p>
          </div>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center gap-5 bg-[#C9F4FF]'>
            {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={rating}
                  />
                </div> */}
            <h2 className='font-semibold'>Expert instructors, cutting-edge programs, and hands-on projects</h2>
            <p className='text-xs'>
              With expert instructors, cutting-edge programs, and hands-on projects, we take through a transformative learning experience that prepares you for success in the fast-paced world of software development.
            </p>
          </div>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center gap-5 bg-[#A6C1C7]'>
            {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={suitcase}
                  />
                </div> */}
            <h2 className='font-semibold'>Career support beyond the bootcamp</h2>
            <p className='text-xs'>
              Get access to career guidance, job placement, and mentorship opportunities to help you launch a successful career in tech. We're committed to your long-term success.
            </p>
          </div>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center gap-5 bg-[#A5B2B5]'>
            {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={community}
                  />
                </div> */}
            <h2 className='font-semibold'>We are building a community</h2>
            <p className='text-xs'>
              What&apos;s more exciting than a community of developers? You have a question?
              Get support and learn from others. Share your work, build, collaborate with fellows. And yet, enjoy socializing!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewFeatures