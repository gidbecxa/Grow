import React from 'react'
import workout from "../../public/workout.png"
import Image from 'next/image'
import suitcase from "../../public/suitcase.png"
import community from "../../public/crowd-of-users.png"
import rating from "../../public/rating.png"

const NewFeatures = () => {
  return (
    <section>
      <div className='container flex flex-col px-4 mx-auto pt-10 mb-20 space-y-12 md:space-y-0 md:flex-row'>
        <div className='flex justify-center flex-col space-y-12 md:w-[40%]'>
          <h1 className='text-main max-w-md text-4xl font-bold text-center md:text-left '>What is different about Grow</h1>
          {/* <p className='md:max-w-sm text-center text-main md:text-left'>Grow is the leading software developement school and community for French-speaking Africans. We are commited to helping millions of francophones with little to no coding experience become world-class certified software engineers.</p> */}
        </div>
        <div className='flex flex-wrap gap-12 md:w-[60%]  justify-end'>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center gap-10 bg-[#FFBDBD]'>
          {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={workout}
                  />
                </div> */}
            <h2 className='font-semibold'>Intensive, practical bootcamps</h2>
            <p className='text-xs'>
            Our training programs are short, rigorous and fully practical. Each program is full of projects and activities, giving you hands-on coding experience, & helping you to acquire first-class developer skills.
            </p>
          </div>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center gap-5 bg-[#C9F4FF]'>
          {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={rating}
                  />
                </div> */}
            <h2 className='font-semibold'>Expert tutors & course creators</h2>
            <p className='text-xs'>
            Our courses are created and taught by the very experts of software development.
                These are professionals who have built and scaled several websites, web and mobile apps
                widely used and approved.
            </p>
          </div>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center gap-5 bg-[#A6C1C7]'>
          {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={suitcase}
                  />
                </div> */}
            <h2 className='font-semibold'>More than courses & bootcamps</h2>
            <p className='text-xs'>
            What happens after you training? We want to help you to fulfill that
                dream of working at a leading tech company or becoming a succesful tech entrepreneur
                like Mark Zuckerberg and Bill Gates.
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
                You need support? Share with others. Help and learn from others. Team up with others
                for a project. And yet, enjoy socializing!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewFeatures