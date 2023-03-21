import React from 'react'
import workout from "../../public/workout.png"
import Image from 'next/image'
import suitcase from "../../public/suitcase.png"
import community from "../../public/crowd-of-users.png"
import rating from "../../public/rating.png"

const NewFeatures = () => {
  return (
    <section className='bg-[#EDF5FD]'>
      {/* <div className='container flex flex-col px-4 mx-auto pt-10 mb-20 space-y-12 md:space-y-0 md:flex-row'> */}
      <div className="container flex flex-col px-12 mx-auto py-10 mb-20 space-y-12 md:space-y-0 md:flex-row">
        <div className='flex justify-center flex-col space-y-12 md:w-[40%]'>
          <h1 className='text-main max-w-md text-4xl font-bold text-center md:text-left '>Faites-vous remarquer avec Grow : Ce qui nous distingue</h1>
          {/* <p className='md:max-w-sm text-center text-main md:text-left'>Grow is the leading software developement school and community for French-speaking Africans. We are commited to helping millions of francophones with little to no coding experience become world-class certified software engineers.</p> */}
        </div>
        <div className='flex  flex-wrap lg:gap-12 md:gap-7 gap-5 md:w-[60%] justify-center md:justify-end'>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center md:gap-10 bg-[#71E0FE]'>
            {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={workout}
                  />
                </div> */}
            <h2 className='font-semibold text-[#222222]'>Libérez votre potentiel et bâtissez-vous une carrière florissante en Tech.</h2>
            <p className='text-xs text-[#222222]'>
              Nos formations accélérées offrent une expérience complète qui vous permet d&apos;acquérir les compétences et les connaissances requises pour réussir dans la Tech.
            </p>
          </div>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center md:gap-10 bg-[#71E0FE]'>
            {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={rating}
                  />
                </div> */}
            <h2 className='font-semibold text-[#222222]'>Instructeurs experts, programmes de pointe et projets pratiques.</h2>
            <p className='text-xs text-[#222222]'>
              Nos instructeurs experts, des programmes de pointe et des projets pratiques vous offrent une expérience pédagogique transformatrice qui vous prépare à une brillante carrière.
            </p>
          </div>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center gap-5 bg-[#71E0FE]'>
            {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={suitcase}
                  />
                </div> */}
            <h2 className='font-semibold text-[#222222]'>Soutien professionnel au-delà du bootcamp</h2>
            <p className='text-xs text-[#222222]'>
            Accédez à des orientations de carrière, à des offres d&apos;emploi et à des occasions de mentorat pour vous aider à lancer une carrière réussie. Nous nous engageons à assurer votre réussite à long terme.
            </p>
          </div>
          <div className='rounded-lg shadow-md w-72 h-72 p-5 flex flex-col justify-center gap-5 bg-[#71E0FE]'>
            {/* <div className=" bg-main rounded-full  w-10 h-10 flex justify-center items-center">
                  <Image
                    priority
                    src={community}
                  />
                </div> */}
            <h2 className='font-semibold text-[#222222]'>Nous bâtissons une communauté</h2>
            <p className='text-xs text-[#222222]'>
            Qu&apos;y a-t-il de plus intéressant qu&apos;une communauté de développeurs ? Obtenez de l&apos;aide et apprenez des autres. Partagez votre travail, collaborez avec les autres. Profitez de la convivialité !
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewFeatures