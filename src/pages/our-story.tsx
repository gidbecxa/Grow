import React, { useState, useEffect } from 'react'
import Banner from '../components/landingpage/Banner'
import Footer from '../components/landingpage/Footer'
import Navbar from '../components/landingpage/Navbar'
import HeroImg from '../components/landingpage/HeroImg'
import storyhero from '../public/storyhero1.jpeg'
import Head from 'next/head'

const OurStory = () => {
  const navTextColor = '#fff'

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Grow is a French-speaking developer school and community for French-speaking Africans, to help French-speaking Africans launch their professional careers in web and mobile development." />
        <title>Our story</title>
      </Head>

      <Navbar navTextColor={navTextColor} />
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center flex flex-col md:flex-row mb-32">
        <div className="md:w-1/2 mt-16">
          <h2 className="text-6xl font-bold text-center text-[#222222]">
            Our Story
          </h2>
        </div>
        <div className="md:w-1/2 ">
          <p className='text-justify mb-4'>Nous sommes une équipe de développeurs de logiciels passionnés avec plus de 10 ans d&apos;expérience dans la construction et le déploiement de solutions logicielles web et mobiles. Récemment, nous avons découvert un problème important auquel sont confrontés plus de 90% des Africains francophones : ils n&apos;ont pas accès à un contenu, des ressources et des formations solides en matière de développement de logiciels. La plupart des ressources disponibles sont en anglais, ce qui se traduit par un nombre insuffisant de talents en développement logiciel et de startups en Afrique francophone.</p>
          <p className='text-justify mb-4'>Pour résoudre ce problème, nous avons lancé Le BootCamp Grow, un bootcamp et une communauté de développeurs pour plus de 100 millions d&apos;adolescents, de jeunes et de jeunes adultes africains francophones. Notre objectif est de renforcer la prochaine génération d&apos;ingénieurs logiciels et d&apos;entrepreneurs technologiques, en leur fournissant des contenu et des ressources d&apos;apprentissage et des formations de haute qualité et à jour en matière de développement de logiciels dans leur langue. Avec le soutien de partenaires et d&apos;investisseurs qui partagent notre vision, nous pouvons combler le fossé entre l&apos;Afrique francophone et le reste du monde, en ayant un impact durable sur la vie des jeunes et de leurs communautés.</p>
          <p className='text-justify'>Rejoignez ce mouvement dès aujourd&apos;hui ! Rejoignez-nous dans notre mission de créer un avenir meilleur pour l&apos;Afrique francophone. En investissant dans Grow, vous ne soutenez pas seulement une startup florissante, mais vous changez aussi des vies et construisez un meilleur avenir pour tous. Ensemble, nous pouvons faire la différence.</p>
        </div>
      </div>
      {/* <HeroImg src={storyhero}/> */}
      <Banner />
      <Footer />
    </>
  )
}

export default OurStory