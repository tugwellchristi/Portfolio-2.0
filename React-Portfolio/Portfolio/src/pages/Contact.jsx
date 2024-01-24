import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Contact() {
    return (
        <Box
            sx={{
                height: '625px',
                width: '100vw',
                background: 'linear-gradient(270deg, #00364Aff, #BD1235ff, #004690ff, #2A1F49ff,  #5A4280ff)',
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
            <Typography variant='h3' fontWeight='bold' mb={2}>
                Let's Connect!
            </Typography>
            <Typography variant='h5'>
                Front End Developer And Web Designer
            </Typography>
        </Box>
    );
}

export default Contact;
