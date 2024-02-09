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
            id="about"
            className="py-8 md:py-16 lg:py-24 flex flex-col justify-center items-center"
            style={{
                height: '840px',
                width: '100vw',
                background: 'linear-gradient(270deg, #00364Aff, #004690ff, #2A1F49ff)',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}
        >
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-mono mb-8 text-white">Let's Connect!</h1>
            <div className=" md:max-w-lg lg:max-w-xl sm:max-w-md"
                style={{
                    width: '800px',
                    backgroundColor: '#151D52ff',
                    padding: '13px',
                    borderRadius: '10px',
                    marginRight: '20px',
                }}
            >
                <form name="contact" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" style={{ color: 'white', fontFamily: 'monospace', fontSize: '18px' }}>
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                width: '100%', 
                                marginBottom: '20px',
                            }}
                        />
                        {nameError && <p style={{ color: '#D24FB3ff' }}>{nameError}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" style={{ color: 'white', fontFamily: 'monospace', fontSize: '18px' }}>
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                marginBottom: '20px',
                            }}
                        />
                        {emailError && <p style={{ color: '#D24FB3ff' }}>{emailError}</p>}
                    </div>
                    <div>
                        <label htmlFor="message" style={{ color: 'white', fontFamily: 'monospace', fontSize: '18px' }}>
                            Message
                        </label>
                        <input
                            type="text"
                            id="message"
                            onChange={(e) => setMessage(e.target.value)}
                            style={{
                                width: '100%',
                                marginBottom: '20px',
                                minHeight: '150px'
                            }}
                        />
                        {messageError && <p style={{ color: '#D24FB3ff' }}>{messageError}</p>}
                    </div>
                    <button style={{ color: 'white', backgroundColor: '#D24FB3ff', borderRadius: '5px', padding: '10px'}} type="submit">Submit</button>
                </form>
            </div>
            <p style={{ color: '#D24FB3ff', fontFamily: 'monospace', fontSize: '20px', marginTop: '25px' }}>I look forward to hearing from you! </p>
        </section>
    );
};

export default Contact;