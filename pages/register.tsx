import React from 'react'
import Navbar from '../components/landingpage/Navbar'

const register = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-6xl px-5 mx-auto mt-32 mb-26 text-center">
        <h2 className="text-6xl font-bold text-center">
            Register!
        </h2>
    </div>
    <div className='border-2 border-black container mx-auto flex'>
        <div className='w-1/4 border-2 border-pink-600'></div>
        <div className='w-3/4 border-2 border-pink-600'></div>
    </div>
    </>
  )
}

export default register