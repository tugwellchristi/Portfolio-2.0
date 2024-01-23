import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function About() {
    const backgroundStyles = {
        height: '750px',
        width: '100vw',
        backgroundColor: '#025EA5ff',
        position: 'fixed',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        marginTop: '60px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };

    const fontStyles = {
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'white',
        fontSize: 'calc(2rem /1.3)',
        margin: '0',
    };
    return (
        <Box sx={{ ...backgroundStyles, ...fontStyles, }}>
            <Typography variant='h3' mb={2}>
                Front-end & UX/UI minded with full stack tendencies.
            </Typography>
            <Typography variant='body1'>
                I've always enjoyed creative challenges, working with people, and being project oriented. Taking basic elements and turning them into something visually meaningful is incredibly rewarding. Ive used these principles personally with various DIY projects and professionally as a pastry chef, in various hospitality roles, and in creating marketing materials across various mediums.
                <br />
                <br />
                Based in the Pacfic Northwest, I find my inspiration from nature, music, immersive art installations, motorcycles, travel, and
                creating of all sorts! I lean heavily into loud, maximalist art but also appreciate simple, delicate things. I believe balance is key!
                <br />
                <br />
                I look forward to meeting others and creating meaningful digital experiences together!
            </Typography>
            <Typography variant='h4' mb={2}>
                Current Focus: Front-End Development // Web Design // UX/UI
            </Typography>
        </Box>
    );
};

export default About;
