import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from './components/Banner'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'

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
