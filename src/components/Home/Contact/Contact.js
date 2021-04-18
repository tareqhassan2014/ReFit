import React from 'react';

const ContactUs = () => {
    return (
        <section style={{ backgroundColor: '#FBD062' }} className='contact-section d-flex justify-content-center align-items-center flex-column mt-5 py-3' id='contact'>
            <div className='w-75 row mt-3 pt-5 justify-content-between justify-content-center'>
                <div className='col-md-6'>
                    <h3 style={{ fontSize: '34px', fontWeight: '600' }} className='mb-4'>
                        Send Us Message
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellendus, ex culpa recusandae, velit, omnis dolores, possimus quis voluptatibus
                    </p>
                </div>

                <div className='col-md-6'>
                    <form action="https://formspree.io/f/xqkgpwag" method="POST" className='event-form'>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                name='email'
                                type='email'
                                placeholder='Your email address'
                                required
                            />

                        </div>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                name='name'
                                type='text'
                                placeholder='Your name / company’s name'
                                required
                            />

                        </div>
                        <div className='form-group'>
                            <textarea
                                className='form-control'
                                name='message'
                                placeholder='Your message'
                                rows='6'
                                required
                            ></textarea>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div>
                                    <button type='submit' className='btn btn-brand'>
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;