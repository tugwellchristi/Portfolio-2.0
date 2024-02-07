import React from 'react';
import backgroundImage from '../assets/Abstract.png';
import resumeImage from '/Tugwell_2023.png';
import GetAppIcon from '@mui/icons-material/GetApp';

function Resume() {
  const resumeLink = 'https://docs.google.com/document/d/1MxepJG71C92PEXL1plYLjTVYs37SCTDzZ75fK0CoMu8/edit?usp=sharing';
  return (
    <div
      style={{
        marginTop: '100px',
        width: '100vw',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }}
    >
        <div style={{ width: '50%', position: 'relative', marginTop: '48px', marginBottom: '50px' }}>
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%', 
            height: '100%',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none', 
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        >
          <GetAppIcon style={{ color: 'white', fontSize: '3rem', marginBottom: '10px', cursor: 'pointer' }} />
          <p style={{ color: '#D24FB3ff', fontSize: '1rem', margin: 0 }}>Click to download a copy</p>
        </a>
        <img src={resumeImage} alt="Resume" style={{ width: '50%', height: 'auto', zIndex: 1 }} />
      </div>
      <div>
      <h1
        style={{
          fontFamily: 'monospace',
          fontWeight: 700,
          fontSize: '40px',
          letterSpacing: '0.3rem',
          color: 'white',

        }}
      >
        Skills Proficiencies:
      </h1>
      <ul
        style={{
          fontFamily: 'monospace',
          fontWeight: 700,
          fontSize: '20px',
          letterSpacing: '0.3rem',
          color: '#FFFFFF',
          marginRight: '20px',

        }}
      >
        <li>- HTML, CSS, JavaScript</li>
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
