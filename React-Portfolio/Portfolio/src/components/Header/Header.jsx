import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Header.css'


function Header() {
    return (
        <Box className='header-box'>
            <Typography variant='h3' fontWeight='bold' mb={2}>
                HI, I'M CHRISTI TUGWELL!
            </Typography>
            <Typography variant='h5'>
                Front End Developer And Web Designer
            </Typography>
        </Box>
    );
}

export default Header;