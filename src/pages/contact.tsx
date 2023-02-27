import React from 'react'
import Navbar from '../components/landingpage/Navbar'


const contact = () => {
    return (
        <>
            <Navbar />
            <section>
                <div className='p-20 flex '>

                    <div className='w-1/2'>
                        <div>
                            <p className='text-[#23464F] text-xs ml-1 font-semibold mb-1'>Contact us</p>
                            <h1 className='text-5xl font-semibold'>Let's get in touch</h1>
                        </div>
                        <div className='mt-10 flex flex-col gap-5'>
                            <div>
                                <h2 className='text-2xl font-semibold mb-1'>Our Location</h2>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                            <div>
                                <h2 className='text-2xl font-semibold mb-1'>Phone Number</h2>
                                <p>&#40;+229&#41; 59 09 59 09, <br /> &#40;+229&#41; 96 11 83 35</p>
                                <p>WhatsApp: &#40;+229&#41; 59 09 59 09</p>
                            </div>
                            <div>
                                <h2 className='text-2xl font-semibold mb-1'>Email Address</h2>
                                <p>hello@ecolegrow.tech</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 max-w-[600px] p-5  relative'>

                        <form action="">
                            <div className=' border-[#23464f] bg-[#23464F] p-12 flex rounded-t-lg rounded-bl-lg flex-col gap-10'>
                                <input type="text" className='w-full rounded-lg p-5 outline-none' placeholder='Name' />
                                <input type="text" className='w-full rounded-lg p-5 outline-none' placeholder='Email' />
                                <input type="text" className='w-full rounded-lg p-5 outline-none' placeholder='Your WhatsApp Number' />
                                <textarea placeholder='Your message' className='outline-none p-5 h-32 resize-none rounded-lg'></textarea>
                                <button type='submit' className="text-white bg-[#66cee8] border-none startedBtn">Send Message</button>
                            </div>
                        </form>
                        <div className='-z-[1000] absolute -left-[6px] -top-[5px] w-32 h-32 rounded-t-3xl rounded-bl-3xl bg-[#66CEEB] '></div>
                        <div className='-z-[1000] absolute -right-[6px] -bottom-[5px] w-72 h-72 rounded-t-3xl rounded-bl-3xl bg-[#FF4F4F] '></div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default contact