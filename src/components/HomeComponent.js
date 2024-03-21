// HomeComponent.js
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link as ScrollLink } from 'react-scroll';
import resumePDF from '../files/Abhignya Pachava.pdf'
import abhignyaPhoto from '../files/Abhignya.JPEG'
import { useTheme } from './ThemeProvider';
import './styles.css';

function HomeComponent() {
  const { darkMode } = useTheme();

  const handleViewResume = () => {
    window.open(resumePDF, '_blank'); // Open the resume in a new tab
  };

  return (
    <div>
      <Grid container spacing={3}>
        {/* First column */}
        <Grid item xs={12} md={6}>
          <div style={{ paddingLeft: '72px', paddingTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
              Welcome to my Portfolio!
            </Typography>
            <Typography variant="body1" paragraph style={{ textAlign: "justify" }}>
              Welcome to my world where data science, software engineering, cooking, and music converge to offer a unique experience! Dive into a world where algorithms meet spices, code harmonizes with melodies, and culinary artistry blends seamlessly with data-driven insights. Whether you're seeking innovative solutions, exploring global recipes, or immersing yourself in soulful rhythms, I am your gateway to a journey of discovery and creativity. Join us at the intersection of technology, gastronomy, and music, curated by a passionate data scientist, software engineer, and enthusiast of life's rich tapestry.
            </Typography>
            <ScrollLink to="projects" spy={true} smooth={true} duration={500}>
              <Button variant="contained" style={{ marginRight: '10px', background: darkMode ? '#fff' : '#333', color: darkMode ? '#333' : '#fff' }}>
                View Projects
              </Button>
            </ScrollLink>
            <Button style={{ color: darkMode ? '#fff' : '#333' }}
              onClick={handleViewResume}>View Resume</Button>
          </div>
        </Grid>


        <Grid item xs={12} md={6} style={{
          marginTop: '72px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
            background: '#555',
            maxWidth: '350px',
            maxHeight: '350px',
            paddingTop: '16px',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0.2, 0.1)'
          }}>
            <img src={abhignyaPhoto} alt="" style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0.2, 0.1)',
              marginLeft: '-36px',
              zIndex: 2,
            }} />
          </div>
        </Grid>

      </Grid>
    </div>
  );
}

export default HomeComponent;
