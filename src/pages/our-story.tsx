import React, {useState, useEffect} from 'react'
import Banner from '../components/landingpage/Banner'
import Footer from '../components/landingpage/Footer'
import Navbar from '../components/landingpage/Navbar'
import HeroImg from '../components/landingpage/HeroImg'
import storyhero from '../public/storyhero1.jpeg'
import Head from 'next/head'

const OurStory = () => {
  const navTextColor = '#23464f'

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Grow is a French-speaking developer school and community for French-speaking Africans, to help French-speaking Africans launch their professional careers in web and mobile development." />
        <title>Our story</title>
      </Head>

    <Navbar  navTextColor={navTextColor}/>
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center flex flex-col md:flex-row mb-32">
        <div className="md:w-1/2 mb-16">
          <h2 className="text-6xl font-bold text-center">
              Our Story
          </h2>
        </div>
        <div className="md:w-1/2 "><p>We are a software startup, a team of talented software
developers with 10 years of experience building and
deploying successful web and mobile software
solutions. We are passionate about creating efficient
solutions through software.
A few months ago, we found a new passion—not
another passion—to solve a significant problem in our
environment, common to more than 90% of
French-speaking Africans.
 90% of French-speaking Africans do not have access
to sound, effective software development content,
resources and training since most content and
resources available on the web for software
development are in English. As a result, there is an
insignificant number of software development talents
and startups from francophone Africa.
To solve this problem, we launched Grow, a developer
school and community for over 100 million
French-speaking African teens, youths and young
adults, to help them become world-class software
engineers and tech entrepreneurs.</p></div>
    </div>
    {/* <HeroImg src={storyhero}/> */}
    <Banner />
    <Footer />
    </>
  )
}

export default OurStory