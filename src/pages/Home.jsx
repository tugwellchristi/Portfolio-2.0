import React from 'react';
import backgroundImage from '../assets/Abstract.png';


function Home() {
    return (
        <div
            className='h-screen md:h-auto bg-cover bg-center flex flex-col justify-center items-center font-mono font-bold text-white text-2xl md:text-4xl px-4'
            style={{
                height: '90vh',
                width: '100vw',
                backgroundImage: `url(${backgroundImage})`,
                letterSpacing: '.2rem',
                fontSize: '2rem',
               
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
        >
            <h2 className="text-4xl md:text-6xl mb-8 font-mono">
                HI, I'M CHRISTI!
            </h2>
            <h4 className="text-2xl md:text-4xl font-mono lg:block md:hidden sm:hidden">
            Front-End Developer <span style={{ color: '#D24FB3ff'}}>//</span> Web Designer <span style={{ color: '#D24FB3ff' }}>//</span> Art Enthusiast
            </h4>
            <h4 className="text-2xl md:text-4xl font-mono lg:hidden md:block sm:block text-center" style={{ letterSpacing: '.2rem'}}>
            Front-End Developer <br /> Web Designer <br /> Art Enthusiast
            </h4>
        </div>
    );
}

export default Home;
