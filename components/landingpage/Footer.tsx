import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-slate-800'>
        <div className="container px-6 py-20 mx-auto space-y-8">
                <div className="flex-col md:flex-row flex md:jusify-around w-[100%]">
                    <div className="text-center md:mb-0 mb-6 flex flex-col space-y-3 text-white md:w-1/3">
                        <Link href='/' className='hover:text-slate-600'>
                            Home
                        </Link>
                        <Link href='/our-story' className='hover:text-slate-600'>
                            Our Story
                        </Link>
                        <Link href='/courses' className='hover:text-slate-600'>
                            Courses
                        </Link>
                        <Link href='/faqs' className='hover:text-slate-600'>
                            FAQs
                        </Link>
                    </div>
                    <div className="flex flex-col justify-end md:w-1/3">
                        <div className="te text-gray-600 md:block text-center">
                            Created by <span className="text-xl "><Link href='https://twitter.com/AiselyHQ'>Aisely</Link></span>
                        </div>
                        <div className="te text-gray-600 md:block text-center">
                            &copy; 2022 Aisely, All Rights Reserved
                        </div>
                    </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer