import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import backgroundImage from '../assets/Abstract.png';


function Home() {
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
            <Typography variant='h3' fontWeight='bold' mb={2} style={{ fontFamily: 'monospace' }}>
                HI, I'M CHRISTI!
            </Typography>
            <Typography variant='h5' style={{ fontFamily: 'monospace' }}>
                Front-End Developer // Web Designer
            </Typography>
        </Box>
    );
}

export default Home;
