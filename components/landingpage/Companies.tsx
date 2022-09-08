import Image from 'next/image'
import React from 'react'
import accenture from '../../public/accenture.png'
import microsoft from '../../public/microsoft.png'
import ibm from '../../public/ibm.png'
import google from '../../public/google.png'
import stripe from '../../public/stripe.png'

const Companies = () => {
  return (
    <section id='companies'>
        <div className="container mx-auto pt-36">
            <div className="flex justify-center mb-10 text-center">
                <p>Our training will equip you with top-level coding skills needed to land a job in leading companies</p>
            </div>
            <div className="flex items-center space-x-6 justify-center">
                <div className="w-[150px]">
                    <Image src={accenture} />
                </div>
                <div className="w-[200px]">
                <Image src={microsoft} />
                </div>
                <div className="w-[150px]">
                <Image src={google} />
                </div>
                <div className="w-[150px]">
                <Image src={stripe} />
                </div>
                <div className="w-[130px]">
                <Image src={ibm} />
                </div>
            </div>
        </div>
    </section >
  )
}

export default Companies