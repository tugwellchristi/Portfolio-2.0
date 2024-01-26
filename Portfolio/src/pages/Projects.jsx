import React from "react";
import { Grid, Card, CardMedia } from '@mui/material';
import { FaGithubSquare } from 'react-icons/fa';

const CustomCard = ({ image, title, description, link, githubLink }) => {
  return (
      <Card style={{ backgroundColor: '#151D52ff', display: 'flex', flexDirection: 'column' }}>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          alt={title}
          height="300"
          image={image}
        />
        </a>
        <div style={{ marginLeft: '25px'}}>
          <h1 style={{ color: '#D24FB3ff', fontFamily: 'monospace', fontSize: '1.7em', marginTop: '10px'}}>{title}</h1>
          <p style={{ fontFamily: 'monospace', color: 'white', fontSize: '1.2em', width: '70%' }}>{description}</p>
        </div>
        <div style={{ marginLeft: '22px', marginBottom: '10px', marginTop: '3px'}}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare style={{ width: '30px', height: '30px', color: 'white' }} />
          </a>
        </div>
      </Card>
    
  );
};

function Projects() {
  const cardsData = [
    {
      image: "/Syntax.png",
      title: "Syntax Band Website",
      description: "MERN Group Project",
      link: "https://github.com/grayd500/Syntax",
      githubLink: "https://github.com/grayd500/Syntax",
    },
    {
      image: "/TapMap.png",
      title: "TapMap Brewery App",
      description: "Front-End Group Project",
      link: "https://daleray1231.github.io/TapMap//",
      githubLink: "https://github.com/tugwellchristi/TapMap",
    },
    {
      image: "/PlantP.png",
      title: "Plant Parenthood App",
      description: "Full-Stack Group Project",
      link: "https://nameless-wave-14504-8d3cae4aaa8e.herokuapp.com/",
      githubLink: "https://github.com/tugwellchristi/scary-potato",
    },
    {
      image: "/PasswordGen.png",
      title: "Password Generator",
      description: "JavaScript Project",
      link: "https://tugwellchristi.github.io/JavaScript-Password-Generator/",
      githubLink: "https://github.com/tugwellchristi/JavaScript-Password-Generator",
    },
    {
      image: "/Syntax.png",
      title: "Weather Dashboard",
      description: "Server-Side APIs Project",
      link: "https://simple-brash-vole.glitch.me/",
      githubLink: "https://github.com/grayd500/Syntax",
    },
    {
      image: "/Scheduler.png",
      title: "Daily Task Planner",
      description: "Third-Party APIs Project",
      link: "https://tugwellchristi.github.io/Daily-Task-Planner/",
      githubLink: "https://github.com/tugwellchristi/Daily-Task-PlannerLinks",
    },
    {
      image: "/Syntax.png",
      title: "Syntax Band Website",
      description: "MERN Group Project",
      link: "https://github.com/grayd500/Syntax",
      githubLink: "https://github.com/grayd500/Syntax",
    },
    {
      image: "/Syntax.png",
      title: "Syntax Band Website",
      description: "MERN Group Project",
      link: "https://github.com/grayd500/Syntax",
      githubLink: "https://github.com/grayd500/Syntax",
    },
    {
      image: "/Syntax.png",
      title: "README.md Generator",
      description: "Node.js Project",
      link: "https://drive.google.com/file/d/1KuxJYpoeBgrCfwYyjjuYIRBt4g2Ojwe0/view",
      githubLink: "https://github.com/tugwellchristi/README.md-Generator",
    },
  ];

  return (
    <section
      id="about"
      style={{
        marginTop: '125px',
        width: '100vw',
        background: 'linear-gradient(270deg, #00364Aff, #004690ff, #2A1F49ff)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="container px-5 py-10 mx-auto">
        <Grid container spacing={4}>
          {cardsData.map((card, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
              <CustomCard {...card} />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}

export default Projects;