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
                    Programmes abordables pour tous
                </h2>
                <p onClick={onSwitch} className=" text-center md:w-1/2">
                    Choisissez l&apos;un de nos programmes prestigieux pour lancer votre carrière de développeur.
                </p>

            </div>
            <div className='justify-center my-10 flex items-center gap-3' >
                <p className={!onToggle ? `font-semibold  text-center` : `font-semibold text-gray-400 text-center`}>Versement unique</p>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input onClick={onSwitch} type="checkbox" value="" className="sr-only peer" />
                    <div className="w-[72px] h-10 bg-[#20BF55] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-black
                    dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
                    peer peer-checked:after:translate-x-full peer-checked:after:border-white
                    peer-checked:after:bg-white after:content-[''] after:absolute after:top-[4px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-[#FF1F1F]"></div>
                </label>
                <p className={onToggle ? `font-semibold  text-center` : `font-semibold text-gray-400 text-center`}>Versement partiel</p>

            </div>

            <div className='flex items-center flex-col md:flex-row justify-center gap-10'>
                <div className={['px-6 flex gap-10 items-center  flex-col  border w-72 h-[41.5rem] rounded-t-3xl rounded-br-3xl', !onToggle ? 'border-[#20BF55]' : 'border-[#FF1F1F]'].join(' ')}>
                    <div className='mt-10 flex items-center flex-col'>
                        <h2 className='mb-3 text-3xl text-center'>Frontend</h2>
                        <p className='text-sm w-3/4 text-center text-gray-500'>Nous vous aiderons à entamer une carrière réussie en tant que développeur front-end.</p>
                    </div>
                    <div className='flex items-center flex-col relative'>
                        <p className='absolute -left-[11px]'>$</p>
                        <p className='text-5xl font-semibold'>
                            {
                                !onToggle ? <>394</> : <>440</>
                            }
                        </p>
                        {/* <p className={[' font-semibold text-xs  -right-[48px] bottom-2', !onToggle ? 'absolute' : ''].join(" ")}>
                            {
                                !onToggle ? <>upfront</> : <>instalment</>
                            }</p> */}
                        <p className={['font-semibold text-sm -right-[48px] bottom-2', !onToggle ? '' : ''].join(" ")}>
                            {
                                !onToggle ? <>241.500 FCFA</> : <>269.500 FCFA</>
                            }
                        </p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <ul className='flex gap-3 flex-col'>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        28 semaines
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        8 semaines - stage
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
                                        Hébergement & outils du Cloud (Netlify, Vercel, Firebase...)
                                    </p>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <Link href='/contact' passHref>
                        <a href="" className="mb-5 text-white bg-[#01BAEF] border-none startedBtn">En Savoir plus</a>
                    </Link>
                </div>
                <div className={['px-6 flex gap-10 items-center  flex-col border-[#01BAEF] w-80 h-[44rem] border-[2px] rounded-3xl', !onToggle ? 'border-[#20BF55]' : 'border-[#FF1F1F]'].join(" ")}>
                    <div className='mt-10 flex items-center flex-col'>
                        <h2 className='mb-3 text-3xl text-center'>FullStack</h2>
                        <p className='text-sm w-3/4 text-center text-gray-500'>Nous vous aiderons à entamer une carrière réussie en tant que développeur fullstack</p>
                    </div>
                    <div className='flex items-center flex-col relative'>
                        <p className='absolute -left-[11px]'>$</p>
                        <p className='text-5xl font-semibold'>
                            {
                                !onToggle ? <>459</> : <>490</>
                            }</p>
                        {/* <p className={[' font-semibold text-xs  -right-[48px] bottom-2', !onToggle ? 'absolute' : ''].join(" ")}>
                            {
                                !onToggle ? <>upfront</> : <>instalment</>
                            }
                        </p> */}
                        <p className={[' font-semibold text-sm  -right-[48px] bottom-2', !onToggle ? '' : ''].join(" ")}>
                            {
                                !onToggle ? <>281.000 FCFA</> : <>300.000 FCFA</>
                            }
                        </p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <ul className='flex gap-3 flex-col'>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        30 semaines
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        6 semaines - stage
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
                                        Bases de Données (MySQL, MongoDB, Prisma…)
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
                                        Hébergement & outils du Cloud (frontend et backend)
                                    </p>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <Link href='/contact' passHref>
                        <a href="" className="mb-5 text-white bg-[#FF1F1F] border-none startedBtn">En Savoir Plus</a>
                    </Link>
                </div>
                <div className={['px-6 flex gap-10 items-center flex-col  border w-72 h-[41.5rem] rounded-t-3xl rounded-bl-3xl', !onToggle ? 'border-[#20BF55]' : 'border-[#FF1F1F]'].join(' ')}>
                    <div className='mt-10 flex items-center flex-col'>
                        <h2 className='mb-3 text-3xl text-center'>Backend</h2>
                        <p className='text-sm w-3/4 text-center text-gray-500'>Nous vous aiderons à entamer une carrière réussie en tant que développeur backend</p>
                    </div>
                    <div className='flex items-center flex-col relative'>
                        <p className='absolute -left-[11px]'>$</p>
                        <p className='text-5xl font-semibold'>
                            {
                                !onToggle ? <>394</> : <>440</>
                            }

                        </p>
                        {/* <p className={[' font-semibold text-xs  -right-[48px] bottom-2', !onToggle ? 'absolute' : ''].join(" ")}>
                            {
                                !onToggle ? <>upfront</> : <>instalment</>
                            }</p> */}
                        <p className={[' font-semibold text-sm  -right-[48px] bottom-2', !onToggle ? '' : ''].join(" ")}>
                            {
                                !onToggle ? <>241.500 FCFA</> : <>269.500 FCFA</>
                            }
                        </p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <ul className='flex gap-3 flex-col'>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        28 semaines
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="18" h="16" />
                                    <p className='text-xs text-gray-500'>
                                        8 semaines - stage
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
                                        Outils de Bases de Données
                                    </p>

                                </div>
                            </li>
                            <li className=''>
                                <div className='flex items-center gap-1'>

                                    <TickCircle w="20" h="18" />
                                    <p className='text-xs text-gray-500'>
                                        Hébergement & outils du Cloud (Firebase, Supabase, AWS…)
                                    </p>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <Link href='/contact' passHref>
                        <a href="" className="mb-5 text-white bg-[#01BAEF] border-none startedBtn">En Savoir Plus</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NewPricing