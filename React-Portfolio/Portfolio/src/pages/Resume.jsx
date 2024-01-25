import React from 'react';
import Box from '@mui/material/Box';
import backgroundImage from '../assets/Abstract.png';
import resumeImage from '/Tugwell_2023.png';

function Resume() {
    return (
        <Box
            sx={{
                height: '100vh',
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
                marginTop: '60px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
        >
          <div style={{ width: '60%', textAlign: 'center' }}>
            <img src={resumeImage} alt="Resume" style={{ width: '100%', height: 'auto'}} />
          </div>
        </Box>
    );
}

export default Resume;
