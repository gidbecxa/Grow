import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/landingpage/Banner'
import Features from '../components/landingpage/Features'
import Footer from '../components/landingpage/Footer'
import Hero from '../components/landingpage/Hero'
import Navbar from '../components/landingpage/Navbar'
import Testimonials from '../components/landingpage/Testimonials'

const Home: NextPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Testimonials />
    <Banner />
    <Footer />
    </>
  )
}

export default Home
