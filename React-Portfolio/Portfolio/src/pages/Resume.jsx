import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import backgroundImage from '../assets/Abstract.png';

function Resume() {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100vw',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'fixed',
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
        </Box>
    );
}

export default Resume;
