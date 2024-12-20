import React, { useRef } from 'react'
import Navbar from './Navbar'
import { BsArrowRight } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import Footer from './Footer'
import ContactForm from './ContactForm'
import GSAP from './GSAP'

const Home = () => {

    return (
        <>
            <section className='bg-white'>
                <div className='container py-5 homeBanner'>
                    <div className="row flex-lg-row flex-md-row flex-column-reverse">
                        <div className="col-lg-6 col-md-7">
                            <div>
                                <div className='fadeLeft display-3 fw-bold text-black lh-base my-5 text-lg-start text-md-start text-center'>
                                    Offset <span className='text-main'>Printing <br /> & Packaging</span> <br /> "Since 1957"
                                </div>
                            </div>

                            <div className='fadeLeft bg-main col-lg-7 p-5 text-white position-relative' style={{ borderRadius: '0px 80px 0px 40px' }}>
                                <button className='btn bg-black text-white position-absolute end-50 py-2' style={{ top: "-20px" }}>About Us <BsArrowRight /></button>

                                <div>Packaging solutions that deliver excellence, protect your products, and captivate
                                    your customers. <br />
                                    <img className='my-3' src={'public/Group 10.png'} width={'60%'} alt="" />

                                    <div>Recommended by people.</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-5'>
                            <div className='fadeRight'>
                                <img src={'public/Chips-pack-1 4.png'} width={'100%'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='py-5 bg-white rounded-bottom-5'>
                <div className="container ">
                    <div className='col-xl-11 d-block mx-auto fadeLeft'>
                        <h3 className='text-black display-6 fw-semibold'>One of the <span className='text-main'> Leading Offset Printing Press</span>in Karachi</h3>
                        <div className='d-flex justify-content-center'>
                            <p className='lh-base fs-5'>In 1957, the Shafi Family, under the headship of Mustafa Shafi, competently supported by his brother entered the Industrial arena. Due to uphill struggle and honest dealings of the family, the business rose to new heights. The company consists to achieve one landmark
                                after another with remarkable consistency. Today, Deluxe Package is the leading Printers in Karachi. <span className='fw-bolder text-decoration-underline'>Read More</span></p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-5 rounded-bottom-5 border-bottom'>
                <div className="container fadeUp">
                    <div className='text-center text-black my-3 fs-5 fw-semibold'>Customers affirm top-notchQuality
                        <span className='mx-3'>
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                        </span>
                        <span>4.7 out of 5 based on 250 reviews.</span>
                    </div>

                    <div className='text-black fs-1 text-center fw-bold mb-5'>Transforming Ideas into Exceptional <br />
                        Packaging <span className='text-main'>*Experiences.</span>
                    </div>



                    <div className="row">
                        <div className="col-lg-3 col-md-4 d-flex justify-content-center fadeUp">
                            <div>
                                <img src={'public/Group 14.png'} alt="" />
                                <div className='fw-bold fs-5 my-1'>Sustainable</div>
                                <p>Our sustainable packaging <br /> is designed to protect your <br /> product and the Earth.</p>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md fadeUp'>
                            <div>
                                <img src={'public/Group 1000001108.png'} width={'100%'} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 d-flex align-items-lg-end justify-content-center fadeUp">
                            <div>
                                <img src={'public/Group 14 (1).png'} alt="" />
                                <div className='fw-bold fs-5 my-1'>Customizable</div>
                                <p>Our customizable <br /> packaging adapts perfectly <br /> to your brand and products.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='py-5 bg-white'>
                <div className="container">
                    <div className="row gap-lg-0 gap-md-0 gap-3">
                        <div className="col-lg-4 col-md-4 fadeUp">
                            <div className='fs-4 fw-medium text-center'>
                                <img src={'public/Ellipse 5.png'} alt="" /> Creative
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 fadeUp">
                            <div className='fs-4 fw-medium text-center'>
                                <img src={'public/Ellipse 5-1.png'} alt="" /> High-Quality
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 fadeUp">
                            <div className='fs-4 fw-medium text-center'>
                                <img src={'public/Ellipse 5-2.png'} alt="" /> Eco-Friendly
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 fadeLeft">
                            <div className='position-sticky top-0 py-5'>
                                <div className='fw-medium fs-5'>Packaging design essentials</div>
                                <div className='text-black my-4 display-2 fw-bold'>Our Projects.</div>

                                <div className='d-flex align-items-start gap-3 col-lg-8'>
                                    <img src={'public/Group 14 (1).png'} width={'15%'} alt="" />
                                    <div>
                                        <div className='fs-4 fw-semibold text-black'>Packaging Solutions.</div>
                                        <div className='my-2 fs-5'>Innovative packaging solutions designed to protect, preserve, and impress.</div>
                                        <button className='btn bg-black text-white py-2'>About Us <BsArrowRight /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 px-lg-2 px-md-2 px-5">
                            <div className='my-5 fadeUp'>
                                <img src={'public/image-8.png'} width={'100%'} alt="" />
                                <div className='text-center my-4 fw-medium'><img src={'public/Ellipse 5.png'} width={'20'} alt="" /> Pink Paper Cup</div>
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src={'public/image-9.png'} width={'100%'} alt="" />
                                <div className='text-center my-4 fw-medium'><img src={'public/Ellipse 5.png'} width={'20'} alt="" /> Pink Paper Cup</div>
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src={'public/image.png'} width={'100%'} alt="" />
                                <div className='text-center my-4 fw-medium'><img src={'public/Ellipse 5.png'} width={'20'} alt="" /> Pink Paper Cup</div>
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src={'public/image-1.png'} width={'100%'} alt="" />
                                <div className='text-center my-4 fw-medium'><img src={'public/Ellipse 5.png'} width={'20'} alt="" /> Pink Paper Cup</div>
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src={'public/image-2.png'} width={'100%'} alt="" />
                                <div className='text-center my-4 fw-medium'><img src={'public/Ellipse 5.png'} width={'20'} alt="" /> Pink Paper Cup</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GSAP />

            <div className='fadeUp'>
                <ContactForm />
            </div>
        </>
    )
}

export default Home