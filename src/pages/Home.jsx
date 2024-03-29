import React from 'react';
import backgroundImage from '../assets/Abstract.png';


function Home() {
    return (
        <div
            className='h-screen md:h-auto bg-cover bg-center flex flex-col justify-center items-center font-mono font-bold text-white text-2xl md:text-4xl px-4 sm:flex-col text-center'
            style={{
                height: '90vh',
                width: '100vw',
                backgroundImage: `url(${backgroundImage})`,
                letterSpacing: '.2rem',
                fontSize: '2rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
        >
            <h2 className="text-4xl md:text-6xl mb-8 font-mono lg:block md:flex md:flex-col md:items-center sm:flex sm:flex-col">
                HI, I'M CHRISTI!
            </h2>
            <h4 className="text-2xl md:text-4xl font-mono lg:block md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center leading-relaxed">
            Front-End Developer <br /> Web Designer <br /> Art Enthusiast
            </h4>
            
        </div>
    );
}

export default Home;
