import React, { useState } from 'react'
import { useFormspark } from "@formspark/use-formspark";
import Navbar from '../components/landingpage/Navbar'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
} from "@chakra-ui/react";
import { useAtom } from 'jotai'
import { autofillAtom } from './index';

const Contact = () => {
    const [autofill, setAutofill] = useAtom(autofillAtom)
    const [submit, submitting] = useFormspark({
        formId: "m6auOy2s",
    });
    console.log(autofill, "fkjdfjafoiljadoaifj")
    const [alert, setAlert] = useState("none")
    const [formData, setFormData] = useState({
        firstname: "",
        email: "",
        phone: "",
        msg: ""
    })
    // console.log(formData)
    const onCloseAlert = () => {
        console.log("alert show", alert)
        setAlert("none")
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await submit({ formData })
        setAlert("block")

    }
    return (
        <>
            <Navbar />
            <div style={{ display: alert, position: "sticky", top: "0", zIndex: "10" }}>
                <Alert
                    zIndex='10'
                    // position='sticky'
                    // top='96px'
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Application submitted!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Thanks for submitting your application. Our team will get back to you soon via email.
                    </AlertDescription>
                    <CloseButton
                        alignSelf='flex-start'
                        position='relative'
                        right={-1}
                        top={-1}
                        onClick={onCloseAlert}
                    />
                </Alert>
            </div>
            <section>
                <div className='p-20 flex md:gap-0 gap-10 flex-col md:flex-row'>

                    <div className='md:w-1/2'>
                        <div>
                            <p className='text-[#23464F] text-xs ml-1 font-semibold mb-1'>Contactez-nous</p>
                            <h1 className='text-5xl font-semibold'>Entrons en contact</h1>
                        </div>
                        <div className='mt-10 flex flex-col gap-5'>
                            <div>
                                <h2 className='text-2xl font-semibold mb-1'>Notre site</h2>
                                <p>Hama, Carrefour BIBE Jéricho, C/660, Maison Ibrahim, Cotonou, Bénin</p>
                            </div>
                            <div>
                                <h2 className='text-2xl font-semibold mb-1'>Numéros</h2>
                                <p>&#40;+229&#41; 59 09 59 09, <br /> &#40;+229&#41; 96 11 83 35</p>
                                <p>WhatsApp: &#40;+229&#41; 59 09 59 09</p>
                            </div>
                            <div>
                                <h2 className='text-2xl font-semibold mb-1'>Addresse Email</h2>
                                <p>hello@ecolegrow.tech</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 max-w-[600px] p-5  relative'>

                        <form onSubmit={onSubmit}>
                            <div className=' border bg-[#23464F] p-12 flex rounded-t-lg rounded-bl-lg flex-col gap-10'>
                                <input
                                    type="text"
                                    value={formData.firstname}
                                    onChange={(event) => setFormData({ ...formData, firstname: event.target.value })}
                                    className='w-full rounded-lg p-5 outline-none'
                                    placeholder='Votre nom' />
                                <input type="text"
                                    value={formData.email}
                                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                                    className='w-full rounded-lg p-5 outline-none' placeholder='Votre email' />
                                <input type="text"
                                    value={formData.phone}
                                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                                    className='w-full rounded-lg p-5 outline-none' placeholder='Numéro' />
                                <textarea
                                    value={ autofill ? autofill : formData.msg}
                                    onChange={(event) => setFormData({ ...formData, msg: event.target.value })}
                                    placeholder='Votre message' className='outline-none p-5 h-32 resize-none rounded-lg'></textarea>
                                <button type='submit' className="text-white bg-[#66cee8] border-none startedBtn">Envoyer</button>
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

export default Contact