import React from 'react'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function courses() {
  return (
    <>
    <Navbar />
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-6xl font-bold text-center">
            Courses
        </h2>
    </div>
    <Banner />
    <Footer />
    </>
  )
}

export default courses