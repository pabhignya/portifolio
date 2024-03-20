// HomeComponent.js
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link as ScrollLink } from 'react-scroll';
import resumePDF from '../files/Abhignya Pachava.pdf'
import abhignyaPhoto from '../files/Abhignya.JPEG'
import './styles.css';

function HomeComponent() {

  const handleViewResume = () => {
    window.open(resumePDF, '_blank'); // Open the resume in a new tab
  };

  return (
    <div>
      <Grid container spacing={3}>
        {/* First column */}
        <Grid item xs={12} md={6}>
          <div style={{ paddingLeft: '72px', paddingTop:'20px' }}>
            <Typography variant="h4" gutterBottom>
              Welcome to my Portfolio!
            </Typography>
            <Typography variant="body1" paragraph>
              Hey there! I am Abhignya. I enjoy creating kickass websites and modeling data to make peoples life easier.

            </Typography>
            <ScrollLink to="projects" spy={true} smooth={true} duration={500}>
              <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
                View Projects
              </Button>
            </ScrollLink>
            <Button onClick={handleViewResume}>View Resume</Button>
          </div>
        </Grid>


        <Grid item xs={12} md={6} style={{
          marginTop: '102px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}>

          <div style={{ background: '#555', maxwidth: '350px', maxheight: '350px', padding: '16px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0.2, 0.1)' }} >
            <img src={abhignyaPhoto} alt="Your Photo" style={{ width: '100%', height: 'auto', maxWidth: '350px', maxHeight: '350px', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0.2, 0.1)', zIndex: 2, marginLeft: '-24px', marginTop: '-54px' }} />

          </div>
          {/* <div style={{background: '#555',maxwidth: '400px', maxheight: '400px',padding:'16px',borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0.2, 0.1)' }} >
        <div style={{background: '#333',maxwidth: '400px', maxheight: '400px',padding:'6px',borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0.2, 0.1)', zIndex:1}} >
        <img src={abhignyaPhoto} alt="Your Photo" style={{ width: '100%', height: 'auto', maxWidth: '400px', maxHeight: '400px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0.2, 0.1)', zIndex: 2, marginLeft: '-20px', marginTop: '20px' }} />
        

            </div>
            </div> */}

          {/* <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
            <img src={abhignyaPhoto} alt="Your Photo" style={{ position: 'absolute', width: '100%', height: 'auto', maxWidth: '400px', maxHeight: '400px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0.2, 0.1)', zIndex: 1 }} />
            <img src={abhignyaPhoto} alt="Your Photo" style={{ position: 'absolute', width: '100%', height: 'auto', maxWidth: '400px', maxHeight: '400px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0.2, 0.1)', zIndex: 2, marginLeft: '-20px', marginTop: '20px' }} />
          </div> */}


        </Grid>


      </Grid>
    </div>
  );
}

export default HomeComponent;
