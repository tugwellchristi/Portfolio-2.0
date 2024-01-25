import React from 'react';
import { FaGithubSquare, FaLinkedin, FaDiscord } from 'react-icons/fa';

function Footer() {
    const iconColor = '#D24FB3ff';

    return (
        <section className="text-white py-4" style={{ backgroundColor: '#151D52ff', height: '125px' }}>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex space-x-4 items-center">
                    <a href="https://github.com/tugwellchristi" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-white">
                        <FaGithubSquare size={32} style={{ color: iconColor }} />
                    </a>
                    <a href="https://www.linkedin.com/in/christi-tugwell-a67194104/" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-white">
                        <FaLinkedin size={32} style={{ color: iconColor }} />
                    </a>
                    <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-white">
                        <FaDiscord size={32} style={{ color: iconColor }} />
                    </a>
                </div>
                <div className="text-center" style={{ color: 'white' }}>
                    <p> &copy; 2024 Christi Tugwell. All rights reserved. </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
