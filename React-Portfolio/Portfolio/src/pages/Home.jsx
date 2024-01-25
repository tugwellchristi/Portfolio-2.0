import React from 'react';
import backgroundImage from '../assets/Abstract.png';


function Home() {
    return (
        <div
            style={{
                height: '750px',
                width: '100vw',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'white',
                flexGrow: 1,
                fontSize: '2rem',
                marginTop: '60px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
        >
            <h2 fontWeight='bold' style={{ fontFamily: 'monospace', fontSize: '60px' }}>
                HI, I'M CHRISTI!
            </h2>
            <h4 style={{ fontFamily: 'monospace' }}>
                Front-End Developer // Web Designer // Art Enthusiast
            </h4>
        </div>
    );
}

export default Home;
