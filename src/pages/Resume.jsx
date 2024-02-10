import React from 'react';
import backgroundImage from '../assets/Abstract.png';
import resumeImage from '/Tugwell_2023.png';
import GetAppIcon from '@mui/icons-material/GetApp';

function Resume() {
  const resumeLink = 'https://docs.google.com/document/d/1MxepJG71C92PEXL1plYLjTVYs37SCTDzZ75fK0CoMu8/edit?usp=sharing';
  return (
    <div
      className="lg:pl-32 flex flex-col md:flex-row justify-center items-center relative"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div
        className="md:ml-36 md:mt-16 sm:mt-72 sm:ml-14 "
        style={{ width: '50%', position: 'relative', marginBottom: '50px' }}>
        <a 
        className="flex flex-col justify-center items-center absolute"
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '50%',
            height: '100%', 
            zIndex: 2,
            textDecoration: 'none',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        >
          <GetAppIcon style={{ color: 'white', fontSize: '3rem', marginBottom: '10px', cursor: 'pointer' }} />
          <p style={{ color: '#D24FB3ff', fontSize: '1rem', margin: 6 }}>Click to download a copy</p>
        </a>
        <img src={resumeImage} alt="Resume" style={{ width: '50%', height: 'auto', zIndex: 1 }} />
      </div>
      <div className="mr-10 ml-4 p-4 mb-14 flex flex-col">
        <h1 className="font-mono font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4">
          Skills Proficiencies:
        </h1>
        <ul className="font-mono text-lg md:text-xl lg:text-2xl text-white">
          <li>- HTML, CSS, JavaScript, ES6</li>
          <li>- Bulma, TailwindCSS, Bootstrap, Material UI</li>
          <li>- Node.js, Express.js</li>
          <li>- MySQL, MongoDB, Mongoose</li>
          <li>- React</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
