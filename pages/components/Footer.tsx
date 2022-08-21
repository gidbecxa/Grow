import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-slate-800'>
        <div className="container flex flex-col-reverse justify-between px-6 py-20 mx-auto space-y-8 md:flex-row md:space-y-0">
            <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                <div>
                    {/* <img src="" alt="__logo" className='h-8' /> */}
                </div>
                <div className="flex justify-center space-x-4">
                    {/* <Link href='#'>
                        <img src="" alt="social-icon" className="h-8" />
                    </Link>
                    <Link href='#'>
                        <img src="" alt="social-icon" className="h-8" />
                    </Link>
                    <Link href='#'>
                        <img src="" alt="social-icon" className="h-8" />
                    </Link>
                    <Link href='#'>
                        <img src="" alt="social-icon" className="h-8" />
                    </Link>
                    <Link href='#'>
                        <img src="" alt="social-icon" className="h-8" />
                    </Link>
                    <Link href='#'>
                        <img src="" alt="social-icon" className="h-8" />
                    </Link> */}
                </div>
                <div className="flex jusify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <Link href='/' className='hover:text-slate-600'>
                            Home
                        </Link>
                        <Link href='/pricing' className='hover:text-slate-600'>
                            Pricing
                        </Link>
                        <Link href='/courses' className='hover:text-slate-600'>
                            Courses
                        </Link>
                        <Link href='/faqs' className='hover:text-slate-600'>
                            FAQs
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <Link href='#' className='hover:text-slate-600'>
                            Careers
                        </Link>
                        <Link href='#' className='hover:text-slate-600'>
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between">
                        <form action="">
                            <div className="flex space-x-3">
                                {/* <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder='subscribe to newsletter'/>
                                <button className="px-6 py-2 text-white rounded-full bg-slate-900 hover:bg-slate-600 focus:outline-none">
                                    subscribe
                                </button> */}
                            </div>
                        </form>
                        <div className="hidden text-xs text-gray-600 md:block">
                            Copyright &copy; All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer