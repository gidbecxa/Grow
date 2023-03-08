import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/landingpage/Banner'
import Features from '../components/landingpage/Features'
import Footer from '../components/landingpage/Footer'
import Pricing from '../components/landingpage/Pricing'
import Hero from '../components/landingpage/Hero'
import Navbar from '../components/landingpage/Navbar'
import Launch from '../components/landingpage/Launch'
import Companies from '../components/landingpage/Companies'
import Community from '../components/landingpage/Community'
import HeroImg from '../components/landingpage/HeroImg'
import newhero from '../public/newhero3.jpg'
import linkCard from '../public/link-card.png'
import logos from '../public/logoss.png'
import { atom } from 'jotai'


// import fireStore from './api/firestore/api'
import { useFirestore } from 'firecrud-react'
import { db } from '../firebase'
import NewPricing from '../components/landingpage/NewPricing'
import NewFeatures from '../components/landingpage/NewFeatures'

export const autofillAtom = atom("")

const Home: NextPage = () => {
  // const { fireStore } = useFirestore(db)
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fireStore.get("Newusers", "paul.emechebe@gmail.com")
  //     console.log("firecrud-react works", res.data())
  //   }

  //   getData()
  // })
 

  const navTextColor = "white"
  const logoColor = true
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Grow is a French-speaking developer school and community for French-speaking Africans." />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@AiselyHQ" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content="https://ecolegrow.tech/" key="ogurl" />
        <meta property="og:image" content="" key="ogimage" />
        <meta property="og:site_name" content="Grow" key="ogsitename" />
        <meta property="og:title" content="Grow" key="ogtitle" />
        <meta property="og:description" content="Grow is a French-speaking developer school and community for French-speaking Africans." key="ogdesc" />

        <title>Grow</title>
      </Head>
      <Navbar
      //  navTextColor={navTextColor}
      // logoColor={logoColor}
      />
      <Hero />
      <Companies />
      {/* <Launch /> */}

      {/* <Features /> */}
      <NewFeatures />
      {/* <Pricing /> */}
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 md:p-10 p-20">
        <Image src={logos} layout="responsive" alt="companies"/>
        </div>
      </div>
      <NewPricing />
      <Community />
      {/* <Banner /> */}
      <Footer />
    </>
  )
}

export default Home
