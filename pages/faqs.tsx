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
                      Who can join the bootcamp?
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Who can join the bootcamp?
                  </h3>
                  <p className="text-main">
                    Anyone. No matter your field of study or profession, you can join our bootcamp to get
an opportunity to become a leading software developer. We assure you that it will be
much easier and more fun than you think.
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
                      What level of software development experience do I need?
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    What level of software development experience do I need?
                  </h3>
                  <p className="text-main">
                    To join our entry-level bootcamp, you need no previous experience at all in software
development. The bootcamp starts with the very basics of programming, and our
project-based approach will help you grasp a lot in a short time.
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
                      What if I have no experience with the use of a computer?
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    What if I have no experience with the use of a computer?
                  </h3>
                  <p className="text-main">
                    We’ll definitely help you out. For those who do not know how to use a computer, we
have a separate short-term class to help you out. We will help you learn and grasp
the basic use of a computer. We also have online resources that will be of help.
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
                       What if I have a job or another commitment?
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                     What if I have a job or another commitment?
                  </h3>
                  <p className="text-main">
                    Since our classes are mostly physical, for now, we have two sessions each day.
There is a morning session and an evening session. You can attend whichever will
be more convenient for you. However, classes will be recorded and the links to the
recorded videos will be shared so that anyone can catch up with any missed classes.
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
                      Can I follow my lectures remotely?
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                     Can I follow my lectures remotely?
                  </h3>
                  <p className="text-main">
                   Yes. We’ll live stream classes. However, we must say that the current bootcamp is a
physical one. We do not yet have in place the necessary structure to offer a standard
online bootcamp. Nonetheless, we’re doing our best to make sure that online classes
are possible, with the best experience.
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
                     Will I get a certificate at the end of my training?
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                     Will I get a certificate at the end of my training?
                  </h3>
                  <p className="text-main">
                   Yes. There are certificates and badges to get during and at the end of the training
period
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
