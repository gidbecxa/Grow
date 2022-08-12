import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const Home: NextPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    </>
  )
}

export default Home
