import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate name
        if (!name.trim()) {
            setNameError('Name is required');
            return;
        } else {
            setNameError('');
        }

        // Validate email
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            return;
        } else {
            setEmailError('');
        }

        // Validate message
        if (!message.trim()) {
            setMessageError('Message is required');
            return;
        } else {
            setMessageError('');
        }
    };

    return (
        <section
            className="flex flex-col justify-center items-center"
            style={{
                minHeight: '100vh', // Ensure full height on smaller screens
                width: '100vw',
                background: 'linear-gradient(270deg, #00364Aff, #004690ff, #2A1F49ff)',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}
        >
            <h1 className="text-3xl md:text-4xl md:mt-24 sm:mt-32 lg:text-4xl lg:mt-0 font-mono mb-8 text-white">Let's Connect!</h1>
            <div className="max-w-md md:w-3/4 sm:w-3/4  mx-auto flex flex-col lg:w-2/3 p-4 rounded"
                style={{ backgroundColor: '#151D52ff' }}
            >
                <form className="flex flex-col" name="contact" onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                        <label
                            htmlFor="name"
                            className="leading-7 text-white font-mono text-lg">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mb-4 p-1 font-mono"
                        />
                        {nameError && <p style={{ color: '#D24FB3ff', fontFamily: 'monospace' }}>{nameError}</p>}
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="email"
                            className="leading-7 text-white font-mono text-lg"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mb-4 p-1 font-mono"
                        />
                        {emailError && <p style={{ color: '#D24FB3ff', fontFamily: 'monospace' }}>{emailError}</p>}
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-white font-mono text-lg"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full mb-2 p-1 font-mono"
                            rows="4"
                        ></textarea>
                        {messageError && <p style={{ color: '#D24FB3ff', fontFamily: 'monospace' }}>{messageError}</p>}
                    </div>
                    <button
                        className="text-white font-mono py-2 px-4 rounded"
                        style={{ backgroundColor: '#D24FB3ff' }}
                        type="submit"
                    >Submit</button>
                </form>
            </div>
            <p 
            className="flex flex-col justify-center items-center font-mono lg:text-lg mt-3 p-1 ml-2 mr-5 sm:text-sm"
            style={{ color: '#D24FB3ff' }}
            >I look forward to hearing from you! </p>
        </section>
    );
};

export default Contact;