import Link from 'next/link'
import React from 'react'
import Banner from '../components/landingpage/Banner'
import Footer from '../components/landingpage/Footer'
import Navbar from '../components/landingpage/Navbar'

function faqs() {
  return (
    <>
        <Navbar />
        <section id="faqs" >
          <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h2 className="text-main max-w-md text-4xl font-bold text-center md:text-left">
                FAQs
              </h2>
              <p className="md:max-w-sm text-center text-main md:text-left">
                    Grow Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus voluptatem, modi sapien. <span className="font-regular">
                        <Link href='/help-center'>Contact us here</Link>
                    </span>
                  </p>
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <div className="rounded-l-ful md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    {/* <div className="px-4 py-2 text-white md:py-1 bg-main">
                      01
                    </div> */}
                    <h3 className="text-base font-semibold md:mb-4 md:hidden">
                      Is Grow free?
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Is Grow free?
                  </h3>
                  <p className="text-main">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    provident ut ex velit laborum, sequi maxime excepturi
                    exercitationem dignissimos. A, inventore ipsam deleniti libero
                    voluptatum perferendis aperiam nulla sunt natus!
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <div className="rounded-l-ful md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    {/* <div className="px-4 py-2 text-white md:py-1 bg-main">
                      01
                    </div> */}
                    <h3 className="text-base font-semibold md:mb-4 md:hidden">
                      Is Grow free?
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Is Grow free?
                  </h3>
                  <p className="text-main">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    provident ut ex velit laborum, sequi maxime excepturi
                    exercitationem dignissimos. A, inventore ipsam deleniti libero
                    voluptatum perferendis aperiam nulla sunt natus!
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <div className="rounded-l-ful md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    {/* <div className="px-4 py-2 text-white md:py-1 bg-main">
                      01
                    </div> */}
                    <h3 className="text-base font-semibold md:mb-4 md:hidden">
                      Is Grow free?
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Is Grow free?
                  </h3>
                  <p className="text-main">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    provident ut ex velit laborum, sequi maxime excepturi
                    exercitationem dignissimos. A, inventore ipsam deleniti libero
                    voluptatum perferendis aperiam nulla sunt natus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Banner />
        <Footer />
    </>
  )
}

export default faqs