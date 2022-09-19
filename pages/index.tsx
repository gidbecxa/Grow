import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/landingpage/Banner'
import Features from '../components/landingpage/Features'
import Footer from '../components/landingpage/Footer'
import Hero from '../components/landingpage/Hero'
import Navbar from '../components/landingpage/Navbar'
import Launch from '../components/landingpage/Launch'
import Companies from '../components/landingpage/Companies'
import Community from '../components/landingpage/Community'
import HeroImg from '../components/landingpage/HeroImg'
import newhero from '../public/newhero3.jpg'


const Home: NextPage = () => {
  const navTextColor = "white"
  const logoColor = true
  return (
    <>
    <div className="absolute -z-10">
        <HeroImg src={newhero}/>
    </div>
    <Navbar navTextColor={navTextColor} logoColor={logoColor}/>
    <Hero />
    <Companies />
    {/* <Launch /> */}
    <Features />
    <Community />
    <Banner />
    <Footer />
    </>
  )
}

export default Home
