import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100px',
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
                fontFamily: 'monospace',
                fontSize: '1.5rem',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                {/* LinkedIn Icon */}
                {/* <SocialIcon url='https://www.linkedin.com/in/christi-tugwell-a67194104/' style={{ marginRight: '10px' }} /> */}

                {/* GitHub Icon */}
                {/* <SocialIcon url="your-github-url" style={{ marginRight: '10px' }} /> */}

                {/* Discord Icon */}
                {/* <SocialIcon url="your-discord-url" style={{ marginRight: '10px' }} /> */}

                {/* Email Icon */}
                {/* <SocialIcon url="mailto:your-email@example.com" /> */}
            </div>
            <Typography variant='body1'>
                @ 2024 Christi Tugwell. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;