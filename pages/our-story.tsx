import React from 'react'
import Banner from '../components/landingpage/Banner'
import Footer from '../components/landingpage/Footer'
import Navbar from '../components/landingpage/Navbar'

const OurStory = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-6xl font-bold text-center">
            Our Story
        </h2>
    </div>
    <Banner />
    <Footer />
    </>
  )
}

export default OurStory