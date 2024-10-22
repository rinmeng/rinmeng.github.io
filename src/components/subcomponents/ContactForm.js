import React, { useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-3 flex flex-col w-1/2 m-auto justify-center'>
            <h1 className='text-2xl text-green-300 '>Name</h1>
            <input className='forms' size={50}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h1 className='text-2xl text-green-300'>Email</h1>
            <input className='forms'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <h1 className='text-2xl text-green-300'>Message</h1>
            <textarea className='forms'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className='btn' type="submit">Submit</button>
        </form>
    );
}


export default ContactForm;