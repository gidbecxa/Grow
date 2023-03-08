import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import Banner from '../components/landingpage/Banner'
import Footer from '../components/landingpage/Footer'
import Navbar from '../components/landingpage/Navbar'
import { useInView } from "react-intersection-observer"; //import {useInView} tells the dom when something is in viewport
import { motion, useAnimation } from "framer-motion"
import Head from 'next/head'


// FRAMER MOTION VARIANTS
const headerVariant = {
  visible: { x: 0, opacity: 1, transition: { delay: .5, duration: .5 } },
  hidden: { x: -10, opacity: 0 },
};

const headerCaptionVariant = {
  visible: { x: 0, opacity: 1, transition: { delay: .5, duration: .8 } },
  hidden: { x: -10, opacity: 0 },
};

const featurePointsVariant = [
  {
    visible: { x: 0, opacity: 1, transition: { delay: 0, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: .4, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: .6, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: .8, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: 1, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: 1.2, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  }
]



function Faqs() {
  const checkNav = useRef(true)
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log("in view")
      control.start("visible"); //when in view,start the visible animation variant
    } else {
      control.start("hidden"); //else its hidden
      console.log("not in view")
    }
  }, [control, inView]);


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Grow is a French-speaking developer school and community for French-speaking Africans, to help French-speaking Africans launch their professional careers in web and mobile development." />
        <title>FAQs</title>
      </Head>
      <Navbar />
      <section ref={ref} id="faqs" >
        <div className="container flex flex-col px-4 mx-auto my-32 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <motion.h2
              variants={headerVariant} //pass in your variant
              initial="hidden"		//pass initial values
              animate={control}
              className="text-main max-w-md text-4xl font-bold text-center md:text-left"	//pass in control as it will be animated when element is in view
            >

              FAQs
            </motion.h2>
            <motion.p
              variants={headerCaptionVariant}
              initial='hidden'
              animate={control}
              className="md:max-w-sm text-center text-main md:text-left"
            >

              Quelques questions courantes qui nous ont été posées. <span className="font-regular">
                <Link href='/help-center'>Contact us here</Link>
              </span>
            </motion.p>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            <motion.div
              initial='hidden'
              animate={control}
              variants={featurePointsVariant[0]}
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-ful md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-semibold md:mb-4 md:hidden">
                    Qui peut participer au bootcamp ?
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Qui peut participer au bootcamp ?
                </h3>
                <p className="text-main mr-2">
                  Tout le monde. Quel que soit votre domaine d&apos;étude ou votre profession, vous pouvez rejoindre notre bootcamp pour avoir l&apos;opportunité de devenir un développeur de logiciels de premier plan. Nous vous assurons que ce sera plus facile et plus amusant que vous ne le pensez.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial='hidden'
              animate={control}
              variants={featurePointsVariant[1]}
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-ful md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-semibold md:mb-4 md:hidden">
                  Quel niveau d&apos;expérience dois-je avoir en matière de code ?
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Quel niveau d&apos;expérience dois-je avoir en matière de code ?
                </h3>
                <p className="text-main">
                  Pour participer à notre bootcamp de niveau débutant, vous n&apos;avez besoin d&apos;aucune expérience préalable dans le développement de logiciels. Le bootcamp commence par les bases de la programmation et notre approche par projet vous aidera à comprendre beaucoup de choses en peu de temps.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial='hidden'
              animate={control}
              variants={featurePointsVariant[2]}
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-ful md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-semibold md:mb-4 md:hidden">
                    Que faire si je n&apos;ai aucune expérience de l&apos;utilisation d&apos;un ordinateur ?
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Que faire si je n&apos;ai aucune expérience de l&apos;utilisation d&apos;un ordinateur ?
                </h3>
                <p className="text-main">
                  Nous vous aiderons certainement. Pour ceux qui ne savent pas utiliser un ordinateur, nous avons un cours séparé de courte durée pour vous aider. Nous vous aiderons à apprendre et à comprendre l&apos;utilisation de base d&apos;un ordinateur. Nous disposons également de ressources qui vous seront utiles.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial='hidden'
              animate={control}
              variants={featurePointsVariant[3]}
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-ful md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-semibold md:mb-4 md:hidden">
                    Et si j&apos;ai un emploi ou un autre engagement ?
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Et si j&apos;ai un emploi ou un autre engagement ?
                </h3>
                <p className="text-main">
                  Comme nos programmes sont hybrides, nous avons deux sessions de cours par jour. Il y a une session en personne et une session en ligne. Vous pouvez assister à l&apos;une ou l&apos;autre l&apos;une ou l&apos;autre vous convient le mieux. De plus, chaque cours sera enregistré et les liens vidéos enregistrées seront partagés afin que chacun puisse rattraper les cours manqués.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial='hidden'
              animate={control}
              variants={featurePointsVariant[4]}
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-ful md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-semibold md:mb-4 md:hidden">
                    Puis-je assister à mes cours à distance ?
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Puis-je assister à mes cours à distance ?
                </h3>
                <p className="text-main">
                  Oui, bien sûr! Nos cours en ligne sont diffusés en direct. De plus, chaque cours sera enregistré et les liens vers les vidéos enregistrées seront partagés afin que chacun puisse rattraper les cours manqués.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial='hidden'
              animate={control}
              variants={featurePointsVariant[5]}
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-ful md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-semibold md:mb-4 md:hidden">
                    Recevrai-je un certificat à la fin de ma formation ?
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Recevrai-je un certificat à la fin de ma formation ?
                </h3>
                <p className="text-main">
                  Oui, pour sur ! Il y a des certificats et des badges à obtenir pendant et à la fin de la période de formation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  )
}

export default Faqs
