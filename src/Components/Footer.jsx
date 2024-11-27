import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className="bg-white">
                <div className="container py-5 px-lg-2 px-md-2 px-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-10 mb-lg-0 mb-4">
                            <div>
                                <img src={'public/images/DP-logo.png'} alt="" />
                            </div>

                            <div className='mt-3'>
                                <FaLinkedin className='bg-main p-2 fs-1 mx-2 rounded-circle text-white' />
                                <FaFacebook className='bg-main p-2 fs-1 mx-2 rounded-circle text-white' />
                                <FaInstagram className='bg-main p-2 fs-1 mx-2 rounded-circle text-white' />
                            </div>


                        </div>
                        <div className="col-lg-3 col-md-4 mb-lg-0 mb-4">
                            <div className="fw-bold fs-5 mb-3 text-uppercase">Equipment</div>
                            <ul className="list-unstyled">
                                <li className="my-2 fw-semibold"><a href="#">BOBST AMBITION 110</a></li>
                                <li className="my-2 fw-semibold"><a href="#">CRON CTP</a></li>
                                <li className="my-2 fw-semibold"><a href="#">EPSON STYLUS PRO</a></li>
                                <li className="my-2 fw-semibold"><a href="#">KBA RAPIDA 106-7</a></li>
                                <li className="my-2 fw-semibold"><a href="#">NOVA CUT 106</a></li>
                                <li className="my-2 fw-semibold"><a href="#">X-RITE EXACT</a></li>
                                <li className="my-2 fw-semibold"><a href="#">X-RITE ICPLATE 2</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 mb-lg-0 mb-4">
                            <div className="fw-bold fs-5 mb-3 text-uppercase">QUICK LINKS</div>

                            <ul className="list-unstyled">
                                <li className="my-2 fw-semibold"><a href="#">About Us</a></li>
                                <li className="my-2 fw-semibold"><a href="#">Processing</a></li>
                                <li className="my-2 fw-semibold"><a href="#">Products</a></li>
                                <li className="my-2 fw-semibold"><a href="#">Equipment</a></li>
                                <li className="my-2 fw-semibold"><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 mb-lg-0">
                            <div className="fw-bold fs-5 mb-3 text-uppercase">Newsletter</div>
                            <button className="btn bg-black text-white">Enter your email address <FaPaperPlane /></button>
                        </div>
                    </div>
                </div>


                <div className="">
                    <div className="py-4 container fw-semibold border-top border-dark text-center">
                        © 2024 Delux Packaging. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer