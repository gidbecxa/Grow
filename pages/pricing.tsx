import Link from 'next/link'
import React from 'react'
import Banner from '../components/landingpage/Banner'
import Footer from '../components/landingpage/Footer'
import Navbar from '../components/landingpage/Navbar'

function pricing() {
  return (
    <>
    <Navbar />
    <section id='pricing'>
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-6xl font-bold text-center">
                Pricing
            </h2>
            <div className="flex flex-col w-96 mx-auto mt-24 md:flex-row md:space-x-6 md:w-auto">
                <div className="flex flex-col p-6 mt-11 md:mt-0 h-96 items-center space-y-6 bg-slate-100 md:w-1/3">
                    <h5 className="text-lg font-bold">
                        John Doe
                    </h5>
                    <p className="text-sm text-slate-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur dignissimos repellendus adipisci porro rerum magni repellat recusandae aperiam aut doloremque sapiente cupiditate sint enim, ipsa dolores molestiae? Dicta, neque!
                    </p>
                </div>
                <div className=" text-white flex-col mt-11 md:mt-0 h-96 items-center p-6 space-y-6 bg-red-700 md:flex md:w-1/3">
                    <h5 className="text-lg font-bold">
                        John Doe
                    </h5>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur dignissimos repellendus adipisci porro rerum magni repellat recusandae aperiam aut doloremque sapiente cupiditate sint enim, ipsa dolores molestiae? Dicta, neque!
                    </p>
                </div>
                <div className="flex-col mt-11 md:mt-0 h-96 items-center p-6 space-y-6 bg-slate-100 md:flex md:w-1/3">
                    <h5 className="text-lg font-bold">
                        John Doe
                    </h5>
                    <p className="text-sm text-slate-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur dignissimos repellendus adipisci porro rerum magni repellat recusandae aperiam aut doloremque sapiente cupiditate sint enim, ipsa dolores molestiae? Dicta, neque!
                    </p>
                </div>
            </div>
        </div>
    </section>
          <div className='my-20'>
              <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div className="flex flex-col space-y-12 md:w-1/2">
                  <h2 className="text-main max-w-md text-4xl font-bold text-center md:text-left">
                    Need help choosing the right plan?
                  </h2>
                  <p className="md:max-w-sm text-center text-main md:text-left">
                    Grow Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus voluptatem, modi sapien. <span className="font-regular">
                        <Link href='/help-center'>Contact us here</Link>
                    </span>
                  </p>
                </div>
                <div className="flex flex-col md:w-1/2">
                </div>
              </div>
          </div>
    <Banner />
    <Footer />
    </>
  )
}

export default pricing