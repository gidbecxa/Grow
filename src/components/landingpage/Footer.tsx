import Link from 'next/link'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
// import GithubIcon from '@mui/icons-material/Github';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <footer className='bg-[#222222]'>
            <div className="container flex flex-col justify-between relative px-6 py-20 mx-auto ">
                <div className="flex-col flex md:jusify-start md:gap-10 justify-start w-[100%]">
                    <div className=''>
                        <p className="text-white mb-4">Find us</p>
                        <div className="text-sm  md:mb-0 mb-6 flex flex-row gap-5 text-white md:w-1/3">

                            <Link target={'_blank'}  href='https://twitter.com/aiselyHQ'>
                                <div className="cursor-pointer">

                                    <TwitterIcon />
                                </div>
                            </Link>
                            <Link target={'_blank'}  href='https://github.com/Le-BootCamp-Grow'>
                                <div className="cursor-pointer">

                                    {/* <GithubIcon /> */}
                                </div>
                            </Link>
                            <Link target={'_blank'}  href='https://www.facebook.com/lebootcampgrow'>
                                <div className="cursor-pointer">

                                    <FacebookIcon />
                                </div>
                            </Link>
                            <Link target={'_blank'}  href='https://www.linkedin.com/company/grow-by-aisely/'>
                                <div className="cursor-pointer">

                                    <LinkedInIcon />
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className=" flex flex-col justify-end md:w-1/3">
                        <p className="text-white mb-4">Quick links</p>

                        <div className='text-white text-xs gap-3 flex flex-co'>
                            <Link href='/' className='hover:text-slate-600'>
                                Home
                            </Link>
                            <Link href='/our-story' className='hover:text-slate-600'>
                                Our Story
                            </Link>
                            <Link href='/#pricing' className='hover:text-slate-600'>
                                Programs
                            </Link>
                            <Link href='/faqs' className='hover:text-slate-600'>
                                FAQs
                            </Link>
                        </div>

                    </div>

                </div>
                <div className='h-full mt-10 text-xs '>
                    <div className="te text-[#FBFBFF] md:block text-center">
                        Created by <span className="font-semibold"><Link href='https://twitter.com/gbecsen/status/1579800852122177536'>Aisely</Link></span>
                    </div>
                    <div className="te text-[#FBFBFF] md:block text-center">
                        &copy; 2022 Aisely, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer