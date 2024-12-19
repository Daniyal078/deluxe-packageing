import React, { useRef } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const Navbar = () => {



    return (
        <>
            <div className="mask"></div>

            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><img src={'../public/images/DP-logo.png'} width={'100%'} alt="" /></NavLink>
                    <div className='d-flex gap-2'>
                        <div className='d-lg-none d-flex gap-2'>
                            <img src={'public/mail.png'} alt="" width={'40'} />
                            <img src={'public/phone.png'} alt="" width={'40'} />
                        </div>

                        <button className="navbar-toggler border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <HiBars3BottomRight className='fs-1' />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <IoCloseCircleSharp className='d-lg-none' />

                        <ul className="navbar-nav m-auto gap-xl-4 gap-lg-3">
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? 'text-main nav-link fw-semibold text-black' : 'nav-link fw-semibold text-black' }} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? 'text-main  nav-link fw-semibold text-black' : 'nav-link fw-semibold text-black ' }} aria-current="page" to="/About">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? 'text-main nav-link fw-semibold text-black' : 'nav-link fw-semibold text-black ' }} aria-current="page" to="/processing">Processing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? 'text-main nav-link fw-semibold text-black' : 'nav-link fw-semibold text-black ' }} aria-current="page" to="/blog" >Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? 'text-main nav-link fw-semibold text-black' : 'nav-link fw-semibold text-black ' }} aria-current="page" to="/equipment">Equipment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? 'text-main nav-link fw-semibold text-black' : 'nav-link fw-semibold text-black ' }} aria-current="page" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        <div className='d-lg-flex d-none gap-3'>
                            <a href="mailto:someone@example.com"><img src={'public/mail.png'} alt="" width={'100%'} /></a>
                            <a href="tel:+4733378901"><img src={'public/phone.png'} alt="" width={'100%'} /></a>
                        </div>
                    </div>
                </div>
            </nav >

        </>
    )

}

export default Navbar