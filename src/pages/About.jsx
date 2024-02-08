import React from 'react';

function About() {
    return (
        <section
            id="about"
            className='pt-32 pb-24'
            style={{
                background: 'linear-gradient(270deg, #00364Aff, #004690ff, #2A1F49ff)',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}
        >
            <div
            className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                <div className="max-w-xlg md:w-3/5 md:mr-12">
                    <h1
                    className="font-mono text-3xl md:text-4xl lg:text-4xl font-bold mb-4 mt-32 sm:mt-16 mx-16"
                    style={{ color: '#D24FB3ff' }}
                    >
                        Front-End & UX/UI minded with Full Stack tendencies
                    </h1>
                        <br />
                        
                    <p className="font-mono text-base md:text-lg text-white leading-relaxed mb-8 mx-10"
                        >
                        I've worn many hats over the years. After a decade in hospitality management, I moved into advertising and marketing, and shortly after, I began a MA in Art and Technology. 
                        Next, I enrolled in a Full Stack Development Bootcamp, which I wrapped up January 2024. I'm excited to begin my developer journey!
                        <br />
                        <br />
                        While becoming proficient in front-end languages with an emphasis on UX/UI principles is my primary goal, I also enjoy working with Unity for designing 3D environments, Glitch.com and A-Frame to create AR/VR spaces, and Adobe Premiere Pro and After Effects to make and edit videos.
                        <br />
                        <br />

                        Based in the Pacfic Northwest, I find inspiration from nature, music, immersive art installations, motorcycles, travel, and
                        creating of all sorts! I lean heavily into loud, maximalist art but also appreciate simple, delicate things. Achieving a balance is key!
                        </p>
                        <br />
                       
                       
                    
                </div>
                <div className="max-w-md md:w-1/3 md:ml-12 mt-14 md:mt-0 mb-6 md:mb-0">
                    <img
                        src="/Me.jpg"
                        alt="Self portrait"
                        className="w-full md:w-auto md:h-auto rounded-lg"
                        style={{  borderRadius: '10px' }}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;