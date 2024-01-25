import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div
            style={{
                height: '625px',
                width: '100vw',
                background: 'linear-gradient(270deg, #00364Aff, #004690ff, #2A1F49ff)',
                position: 'fixed',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                flexGrow: 1,
                fontSize: '2rem',
                marginTop: '60px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
        >
            <h1>Let's Connect!</h1>
            <div
            style={{
                width: '800px',
                backgroundImage: '/Abstract.png';
                padding: '13px', 
                borderRadius: '10px',
                marginRight: '20px',
            }}
            >
                <form name="contact" onSubmit={handleSubmit}>
                    <div>
                        <labe htmlFor="name" style={{ color: 'white' }}>
                            Name
                        </label>
                        <input 
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: '100%' }}
                        >
                        
                        </input>
                    </div>
                </form>
            </div>
        </div>
    );
}
}
export default Contact;
