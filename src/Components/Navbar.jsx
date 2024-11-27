import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <NavLink className="navbar-brand" to="/"><img src={'../public/images/DP-logo.png'} alt="" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto gap-xl-4 gap-lg-3">
                        <li className="nav-item">
                            <NavLink className={(e) => { return e.isActive ? 'text-main nav-link fw-semibold text-black' : 'nav-link fw-semibold text-black' }} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={(e) => { return e.isActive ? 'text-main nav-link fw-semibold text-black' : 'nav-link fw-semibold text-black ' }} aria-current="page" to="/About">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-black" aria-current="page" href="#">Processing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-black" aria-current="page" href="#">Products</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link fw-semibold text-black dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Equipment
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-black" aria-current="page" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <div className='d-flex gap-3'>
                        <img src={'public/mail.png'} alt="" width={'100%'} />
                        <img src={'public/phone.png'} alt="" width={'100%'} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar