import React, { useEffect, useState } from 'react'
import { Switch } from '@chakra-ui/react'
import ToggleBtn from '../common/ToggleBtn'
import TickCircle from '../icons/TickCircle'
import Link from 'next/link'
import cn from 'clsx'

const NewPricing = () => {
    const [onToggle, setOnToggle] = useState(false)
    const onSwitch = () => {
        setOnToggle(current => !current)
    }

    useEffect(() => {
        console.log("onToggle is: ", onToggle)
    }, [onToggle])

    return (
        <section id='pricing'>
            <div className=" flex gap-5 flex-col items-center max-w-6xl px-5 mx-auto md:mt-32 mb-3 text-center">
                <h2 className="md:text-4xl text-4xl font-semibold text-center">
                    Affordable programs for all
                </h2>
                <p onClick={onSwitch} className=" text-center md:w-1/2">
                    Choose one of our top-tier programs to kickstart your tech career
                </p>

            </div>
            <div className='justify-center my-10 flex items-center gap-3' >
                <p className={!onToggle ? `font-semibold  `:`font-semibold text-gray-400 `}>Upfront</p>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input onClick={onSwitch} type="checkbox" value="" className="sr-only peer" />
                    <div className="w-[72px] h-10 bg-[#66CEE8] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-black
                    dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
                    peer peer-checked:after:translate-x-full peer-checked:after:border-white
                    peer-checked:after:bg-white after:content-[''] after:absolute after:top-[4px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-[#FF4F4F]"></div>
                </label>
                    <p className={onToggle ? `font-semibold  `:`font-semibold text-gray-400 `}>Instalments</p>

            </div>
            <div className='flex items-center flex-col md:flex-row justify-center gap-10'>
                <div className={['px-6 flex gap-10 items-center  flex-col  border w-72 h-[40rem] rounded-t-3xl rounded-br-3xl', !onToggle ? 'border-[#66CEE8]' : 'border-[#FF4F4F]' ].join(' ')}>
                    <div className='mt-10 flex items-center flex-col'>
                        <h2 className='mb-3 text-3xl text-center'>Frontend</h2>
                        <p className='text-sm w-3/4 text-center text-gray-500'>Let???s help you begin a successful career as a
                            frontend developer</p>
                    </div>
                    <div className='flex items-center flex-col relative'>
                        <p className='absolute -left-[11px]'>$</p>
                        <p className='text-5xl font-semibold'>
                            {
                                !onToggle ? <>394</> : <>440</>
                            }
                        </p>
                        <p className={[' font-semibold text-xs  -right-[48px] bottom-2', !onToggle ? 'absolute' : ''].join(" ")}>
                            {
                                 !onToggle ? <>upfront</> : <>instalment</>
                            }</p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <ul className='flex gap-3 flex-col'>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        28 weeks bootcamp
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        8 weeks internship
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        HTML5, CSS3, JavaScript
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        Git, GitHub
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        CSS Frameworks
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        React.js/Next.js, Node.js
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        UI/UX design
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="20" h="18" />
                                    <p className='text-xs text-gray-500'>
                                        Hosting and Cloud deployment (Netlify, Vercel, Firebase...)
                                    </p>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <Link href='/programs' passHref>
                        <a href="" className="text-white bg-[#66cee8] border-none startedBtn">Reach us to learn more</a>
                    </Link>
                </div>
                <div className={['px-6 flex gap-10 items-center  flex-col border-[#66CEE8] w-80 h-[44rem] border-[2px] rounded-3xl', !onToggle ? 'border-[#66CEE8]' : 'border-[#FF4F4F]'].join(" ")}>
                <div className='mt-10 flex items-center flex-col'>
                        <h2 className='mb-3 text-3xl text-center'>FullStack</h2>
                        <p className='text-sm w-3/4 text-center text-gray-500'>Let???s help you begin a successful career as a full-stack developer</p>
                    </div>
                    <div className='flex items-center flex-col relative'>
                        <p className='absolute -left-[11px]'>$</p>
                        <p className='text-5xl font-semibold'>
                        {
                                 !onToggle ? <>459</> : <>490</>
                            }</p>
                        <p className={[' font-semibold text-xs  -right-[48px] bottom-2', !onToggle ? 'absolute' : ''].join(" ")}>
                        {
                                 !onToggle ? <>upfront</> : <>instalment</>
                            }
                        </p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <ul className='flex gap-3 flex-col'>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        30 weeks bootcamp
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        6 weeks internship
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        HTML5, CSS3, JavaScript
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        Git, GitHub
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        CSS Frameworks
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                    Database technologies (MySQL, MongoDB???)
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                    Node.js, Express.js, TypeScript
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="20" h="18" />
                                    <p className='text-xs text-gray-500'>
                                        Hosting and Cloud deployment (frontend and backend)
                                    </p>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <Link href='/programs' passHref>
                        <a href="" className="text-white bg-[#FF4F4F] border-none startedBtn">Reach us to learn more</a>
                    </Link>
                </div>
                <div className={['px-6 flex gap-10 items-center  flex-col  border w-72 h-[40rem] rounded-t-3xl rounded-bl-3xl', !onToggle ? 'border-[#66CEE8]' : 'border-[#FF4F4F]' ].join(' ')}>
                <div className='mt-10 flex items-center flex-col'>
                        <h2 className='mb-3 text-3xl text-center'>Backend</h2>
                        <p className='text-sm w-3/4 text-center text-gray-500'>Let???s help you begin aa successful career as a backend developer</p>
                    </div>
                    <div className='flex items-center flex-col relative'>
                        <p className='absolute -left-[11px]'>$</p>
                        <p className='text-5xl font-semibold'>
                        {
                                !onToggle ? <>394</> : <>440</>
                            }
                            
                        </p>
                        <p className={[' font-semibold text-xs  -right-[48px] bottom-2', !onToggle ? 'absolute' : ''].join(" ")}>
                        {
                                 !onToggle ? <>upfront</> : <>instalment</>
                            }</p>
                        
                    </div>
                    <div className='flex items-center flex-col'>
                        <ul className='flex gap-3 flex-col'>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        28 weeks bootcamp
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        8 weeks internship
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        HTML5, CSS3, JavaScript
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        Git, GitHub
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                    TypeScript
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                    Node.js, Express.js
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                    Database technologies (MySQL, MongoDB???)
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="20" h="18" />
                                    <p className='text-xs text-gray-500'>
                                    Hosting and Cloud deployment (Firebase, Supabase, AWS???)
                                    </p>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <Link href='/programs' passHref>
                        <a href="" className="text-white bg-[#66cee8] border-none startedBtn">Reach us to learn more</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NewPricing