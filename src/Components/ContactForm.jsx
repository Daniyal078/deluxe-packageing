import React from 'react'

const ContactForm = () => {
    return (
        <>
            <section className='py-5 bg-white rounded-5'>
                <div className="container">
                    <div className='shadow p-4 rounded-4 col-lg-7 d-block mx-auto'>
                        <div className='fw-bold text-center fs-5'>Your inquiry will be responded promptly</div>
                        <div className='text-center fw-semibold text-danger'>Your inquiry will be responded promptly</div>

                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <label className='my-3 fw-semibold' htmlFor="">First name*</label>
                                        <input type="text" className='form-control py-2 bg-light border-0' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label className='my-3 fw-semibold' htmlFor="">Last name*</label>
                                        <input type="text" className='form-control py-2 bg-light border-0' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <label className='my-3 fw-semibold' htmlFor="">Email*</label>
                                        <input type="email" className='form-control py-2 bg-light border-0' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label className='my-3 fw-semibold' htmlFor="">Phone number*</label>
                                        <input type="text" className='form-control py-2 bg-light border-0' />
                                    </div>
                                </div>
                            </div>

                            <textarea name="" id="" rows={'4'} className='form-control py-2 bg-light border-0 mt-3'></textarea>

                            <button className='btn bg-main mt-4 text-white px-3 py-2'>Upload Image</button>

                            <div className='fw-semibold my-3'>Accepted file types: jpeg, jpg, png, gif, Max. file size: 16 MB.</div>

                            <button className='btn bg-black fw-semibold w-100 text-white py-2'>Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm