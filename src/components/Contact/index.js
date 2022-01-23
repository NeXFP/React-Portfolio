import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [ formState , setFormState ] = useState({ name: '' , email: '' , phone: '' , message: '' });
    const [ errorMessage, setErrorMessage ] = useState('');
    const { name, email, phone, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    }




    return (
        <section id='contact' className='my-5'>
            <div className="flex-center">
                <h2>Contact Me</h2>
            </div>

            {errorMessage && (
                <div className='flex-center'>
                    <p>{errorMessage}</p>
                </div>
            )}

            <div className="flex-center">
                <form id='contact-form' onSubmit={ handleSubmit }>
                    <div className='my-1'>
                        <label for='name'>Name:</label>
                        <input id='name' defaultValue={ name } onBlur={ handleChange }></input>
                    </div>

                    <div className='my-1'>
                        <label for='email'>Email:</label>
                        <input id='email' defaultValue={ email } onBlur={ handleChange }></input>
                    </div>

                    <div className='my-1'>
                        <label for='phone'>Phone Number:</label>
                        <input id='phone' defaultValue={ phone } onBlur={ handleChange }></input>
                    </div>

                    <div className='my-1'>
                        <label for='message'>Message:</label>
                        <textarea id='message' defaultValue={ message } onBlur={ handleChange }></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;