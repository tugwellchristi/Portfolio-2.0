import React from 'react';
import backgroundImage from '../assets/Abstract.png';
import resumeImage from '/Tugwell_2023.png';

function Resume() {
  const resumeLink = 'https://docs.google.com/document/d/1MxepJG71C92PEXL1plYLjTVYs37SCTDzZ75fK0CoMu8/edit?usp=sharing';
  return (
    <div
      style={{
        marginTop: '7rem',
        width: '100vw',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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

        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div style={{ width: '50%', textAlign: 'center', marginTop: '50px', marginBottom: '35px' }}>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <img src={resumeImage} alt="Resume" style={{ width: '100%', height: 'auto' }} />
        </a>
      </div>
    </div>
  );
}

export default Resume;
