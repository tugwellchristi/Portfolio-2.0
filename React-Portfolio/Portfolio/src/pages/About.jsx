import React from 'react';

function About() {
    return (
        <section
            id="about"
            style={{
                height: '810px',
                width: '100vw',
                background: 'linear-gradient(270deg, #00364Aff, #004690ff, #2A1F49ff)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    marginTop: '160px'
                }}
            >
                <div
                    style={{ maxWidth: '800px', marginRight: '30px' }}>
                    <h1
                        style={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '0.3rem',
                            color: '#D24FB3ff',
                            fontSize: 'calc(2.5rem / 1.3)',
                            margin: 0,
                        }}
                    >
                        Front-end & UX/UI minded with Full Stack tendencies
                    </h1>
                        <br />
                        
                    <p
                        style={{ color: 'white', marginBottom: '20px', fontFamily: 'monospace', fontSize: '1.2em' }}>
                        I've been known to wear many hats. After a decade in hospitality management, I moved over to advertising and marketing and began a MS in Art and Technology. I followed that with a Full Stack Development Bootcamp, which I am close to wrapping up. I highly enjoy using Unity for designing 3D environments, Glitch.com and A-Frame to create VR spaces, working in Adobe Premiere Pro and After Effects to create videos, and learning front end programs with an emphasis on UX/UI principles. I'm still working out the rest!
                        <br />
                        <br />

                        Based in the Pacfic Northwest, I find my inspiration from nature, music, immersive art installations, motorcycles, travel, and
                        creating of all sorts! I lean heavily into loud, maximalist art but also appreciate simple, delicate things. I believe balance is key!
                        </p>
                        <br />
                       
                       <p style={{ color: '#D24FB3ff', marginBottom: '20px', fontFamily: 'monospace', fontSize: '1.3em' }}> 
                       I look forward to meeting others and creating meaningful digital experiences together! 
                       </p>
                    
                </div>
                <div
                    style={{ maxWidth: '600px' }}>
                    <img
                        src="/Me.jpg"
                        alt="Self portrait"
                        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;