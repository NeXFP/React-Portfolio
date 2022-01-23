import React from 'react';

function Contact() {
    return (
        <section id='contact' className='my-5'>
            <div className="flex-center">
                <h2>Contact Me</h2>
            </div>

            <div className="flex-center">
                <form id='contact-form'>
                    <div className='my-1'>
                        <label for='name'>Name:</label>
                        <input id='name'></input>
                    </div>

                    <div className='my-1'>
                        <label for='email'>Email:</label>
                        <input id='email'></input>
                    </div>

                    <div className='my-1'>
                        <label for='phone'>Phone Number:</label>
                        <input id='phone'></input>
                    </div>

                    <div className='my-1'>
                        <label for='message'>Message:</label>
                        <textarea id='message'></textarea>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;