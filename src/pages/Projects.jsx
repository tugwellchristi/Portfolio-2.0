import React from "react";
import { Grid, Card, CardMedia } from '@mui/material';
import { FaGithubSquare } from 'react-icons/fa';

const CustomCard = ({ image, title, description, link, githubLink, index }) => {
  const showGithubLink = index < 6; // Display GitHub link for the first 6 cards
  return (
    <Card className="custom-card" style={{ margin: '20px', backgroundColor: '#151D52ff', display: 'flex', flexDirection: 'column', boxShadow: '0px 0px 3px 1px #D24FB3ff' }}>
      <div style={{ margin: '25px' }}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CardMedia
            component="img"
            alt={title}
            height="300"
            image={image}
          />
        </a>
        <div>
          <h1 style={{ color: '#D24FB3ff', fontFamily: 'monospace', fontSize: '1.7em', marginTop: '10px' }}>{title}</h1>
          <p style={{ fontFamily: 'monospace', color: 'white', fontSize: '1.2em', width: '70%' }}>{description}</p>
        </div>
        {showGithubLink && (
          <div style={{ marginBottom: '10px', marginTop: '3px' }}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithubSquare style={{ width: '30px', height: '30px', color: 'white' }} />
            </a>
          </div>
        )}
        <style jsx>{`
        .custom-card:hover {
          transform: scale(1.5);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
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
      link: "https://syntax-8rz6.onrender.com/music",
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
      image: "/Weather.png",
      title: "Weather Dashboard",
      description: "Server-Side APIs Project",
      link: "https://simple-brash-vole.glitch.me/",
      githubLink: "https://github.com/tugwellchristi/Weather-Dashboard",
    },
    {
      image: "/PasswordGen.png",
      title: "Password Generator",
      description: "JavaScript Project",
      link: "https://tugwellchristi.github.io/JavaScript-Password-Generator/",
      githubLink: "https://github.com/tugwellchristi/JavaScript-Password-Generator",
    },

    {
      image: "/Scheduler.png",
      title: "Daily Task Planner",
      description: "Third-Party APIs Project",
      link: "https://tugwellchristi.github.io/Daily-Task-Planner/",
      githubLink: "https://github.com/tugwellchristi/Daily-Task-PlannerLinks",
    },
    {
      image: "/Notes.png",
      title: "Note Taker",
      description: "Express.js Project",
      link: "https://note-taker-6zne.onrender.com",
      githubLink: "https://github.com/tugwellchristi/Note-Taker?tab=readme-ov-file",
    },
    // {
    //   image: "/SocialDB.png",
    //   title: "Social Network API",
    //   description: "NoSQL Project",
    //   link: "https://drive.google.com/file/d/1I8WYESL2_4jtzMRcoSkgfaOLh8q0QX26/view?usp=sharingLinks",
    //   githubLink: "https://github.com/tugwellchristi/Social-Network-API?tab=readme-ov-file",
    // },
    // {
    //   image: "/ReadME.png",
    //   title: "README.md Generator",
    //   description: "Node.js Project",
    //   link: "https://drive.google.com/file/d/1KuxJYpoeBgrCfwYyjjuYIRBt4g2Ojwe0/view",
    //   githubLink: "https://github.com/tugwellchristi/README.md-Generator",
    // },
    // {
    //   image: "/ReadME.png",
    //   title: "README.md Generator",
    //   description: "Node.js Project",
    //   link: "https://drive.google.com/file/d/1KuxJYpoeBgrCfwYyjjuYIRBt4g2Ojwe0/view",
    //   githubLink: "https://github.com/tugwellchristi/README.md-Generator",
    // },
    {
      image: "/NW.png",
      title: "NW Wanderer",
      description: "Unity Game Engine Project",
      link: "https://play.unity.com/mg/other/webgl-builds-340110",
    },
    {
      image: "/Hello.png",
      title: "Hello Summer",
      description: "Adobe After Effects Project",
      link: "https://vimeo.com/725517272?share=copy",
    },
    {
      image: "/AE.png",
      title: "Relax",
      description: "Adobe After Effects Project",
      link: "https://vimeo.com/726232693?share=copy",
    },
    {
      image: "/Winter.png",
      title: "Winter Dreamin'",
      description: "Adobe After Effects Project \nCaution: This content contains flashing objects, which may cause discomfort in sensitive individuals. Viewer discretion is advised.",
      link: "https://vimeo.com/723921775?share=copy",
    },
  ];

  return (
    <section
      className="flex flex-col justify-center items-center"
      style={{
        marginTop: '100px',
        width: '100vw',
        background: 'linear-gradient(270deg, #00364Aff, #004690ff, #2A1F49ff)',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="container px-5 py-10 mx-auto lg:mr-40 md:mr-8">
      {/* <h1 className="text-3xl md:text-4xl md:mt-24 sm:mt-24 lg:text-4xl lg:mt-0 font-mono mb-8 text-white justify-center items-center flex flex-col">Web Development Projects</h1> */}
        <Grid container spacing={4}>
          {cardsData.map((card, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
              <CustomCard {...card} index={index} />
            </Grid>
          ))}
        </Grid>
      </div>
      <style jsx>{`
  .custom-card:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`}</style>
    </section>
  );
}

export default Projects;