import React from 'react'
import ContactForm from './ContactForm'
import { FaPhoneVolume } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { BiSolidPhoneCall } from 'react-icons/bi'
import GSAP from './GSAP'

const ContactUs = () => {


    return (
        <>
            <section className='bg-light-main'>
                <div className='py-5 bg-white'>
                    <div className="container">
                        <div className='fadeLeft'>
                            <div className='display-5 fw-bold'>Connect for <span className='text-main'>Solutions</span>.</div>
                            <div className='fs-5'>Collaborate with us for innovative packaging solutions.</div>
                        </div>
                        <div className='fadeUp'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-main-light py-5'>
                <div className="container">
                    <div className='fw-bold fs-1 text-lg-start text-md-start text-center mb-4'>Contact us for more <span className='text-main'>Information</span></div>

                    <div className="row gap-lg-0 gap-md-0 gap-3 justify-content-center">
                        <div className="col-lg-4 col-md-4 col-9">
                            <div className='shadow rounded-4 text-center p-lg-3 p-1 h-100'>
                                <BiSolidPhoneCall className='fs-1 my-3 text-main' />

                                <div className='lh-lg'>
                                    <div>Tel : (+92-21) 35056249</div>
                                    <div>Tel : (+92-21) 35066285</div>
                                    <div>Fax : (+92-21) 35113173</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-9">
                            <div className='shadow rounded-4 text-center p-lg-3 p-1 h-100'>
                                <MdMailOutline className='fs-1 my-3 text-main' />
                                <div className='lh-lg'>
                                    <div>info@deluxepackages.com</div>
                                    <div>sales@deluxepackages.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-9">
                            <div className='shadow rounded-4 text-center p-lg-3 p-1 h-100'>
                                <FaLocationDot className='fs-1 my-3 text-main' />
                                <div className='lh-lg'>
                                    <div>Plot # 14-A, Unit 149, Sector <br /> 30, Korangi Industrial Area, <br /> Karachi Pakistan</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <GSAP />
        </>
    )
}

export default ContactUs