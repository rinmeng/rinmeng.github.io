import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // New state variable for error messages
    const [isDisabled, setIsDisabled] = useState(false); // New state variable

    const validateForm = () => {
        if (!name || !email || !message) {
            return 'Please fill in all fields.';
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation pattern
        if (!emailPattern.test(email)) {
            return 'Please enter a valid email address.';
        }
        return null; // Return null if all validations pass
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset messages
        setSuccessMessage('');
        setErrorMessage('');

        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            return; // Stop form submission if there are validation errors
        }

        // Disable all fields and indicate loading state
        setIsLoading(true);
        setIsDisabled(true); // Disable fields upon submission

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send('service_mjvhzip', 'template_fu396ax', templateParams, 'i8uMppcc8nrScKIjC')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Message has been sent! Thank you!');
            }, (err) => {
                console.log('FAILED...', err);
                setErrorMessage('Failed to send message. Please try again later.');
            })
            .finally(() => {
                setIsLoading(false);
                // Keep isDisabled as true to prevent further input
            });
    };

    return (
        <form onSubmit={handleSubmit} className='forms w-full lg:w-1/2 m-auto p-10' noValidate>
            <div className='space-y-3 flex flex-col justify-center'>

                <h1 className='text-2xl text-green-300'>Name</h1>
                <input className={`forms ${isDisabled ? 'bg-slate-600 cursor-not-allowed opacity-50' : ''}`}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isDisabled || isLoading} // Disable input based on state
                />
                <h1 className='text-2xl text-green-300'>Email</h1>
                <input className={`forms ${isDisabled ? 'bg-slate-600 cursor-not-allowed opacity-50' : ''}`}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isDisabled || isLoading} // Disable input based on state
                />
                <h1 className='text-2xl text-green-300'>Message</h1>
                <textarea className={`forms ${isDisabled ? 'bg-slate-600 cursor-not-allowed opacity-50' : ''}`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isDisabled || isLoading} // Disable textarea based on state
                />
                <button className={`btn ${isDisabled ? 'bg-slate-600 cursor-not-allowed opacity-50' : ''}`}
                    type="submit" disabled={isDisabled || isLoading}>
                    Submit
                </button>
                {/* Loading indicator */}
                <h1 className={`${isLoading ? 'block animate-fadein' : 'animate-fadeout hidden'} text-center text-xl text-yellow-500`}>Sending...</h1>
                <h1 className={`${successMessage ? 'block animate-fadein' : 'animate-fadeout hidden'} text-center text-xl text-yellow-500`}>{successMessage}</h1>
                <h1 className={`${errorMessage ? 'block animate-fadein' : 'animate-fadeout hidden'} text-center text-xl text-red-500`}>{errorMessage}</h1>

            </div>
        </form>
    );
}

export default ContactForm;
