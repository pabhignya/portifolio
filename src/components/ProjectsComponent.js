import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Grid, List, ListItem, Slide } from '@mui/material';
import groceryPhoto from '../files/grocery.jpg';
import hospitalPhoto from '../files/hospital.png';
import todoPhoto from '../files/todo.png';
import { useTheme } from './ThemeProvider';

function ProjectsComponent() {
  const { darkMode, toggleDarkMode } = useTheme();

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Grocery Time',
      imageUrl: groceryPhoto,
      summary: 'An e-commerce platform with comprehensive user features, ensuring seamless navigation and enhancing the overall shopping experience. ',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 2,
      title: ' SMARTCARE',
      imageUrl: hospitalPhoto,
      summary: 'It is a Hospital Management System with robust features including patient registration, appointment scheduling, and EMR integration. ',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 3,
      title: ' EFFITASK',
      imageUrl: todoPhoto,
      summary: 'A responsive To-Do List Application with task management features and secure user authentication, achieving fast task confirmation response times.',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 4,
      title: 'Amazon Product Recommendation System',
      imageUrl: groceryPhoto,
      summary: 'A Python-based Amazon Product Recommendation System with high accuracy using collaborative filtering techniques',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 5,
      title: '  Khoury College IG Analysis And Reach Forecasting',
      imageUrl: hospitalPhoto,
      summary: 'An Instagram Analysis and Reach Forecasting tool, with Power BI for intuitive data visualization, facilitating actionable insights. ',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 6,
      title: ' ML For Handwritten Digits',
      imageUrl: todoPhoto,
      summary: 'A sophisticated Machine Learning model for Handwritten Digit Recognition ',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 7,
      title: 'NLP for Stress Detection',
      imageUrl: groceryPhoto,
      summary: 'An NLP-based Stress Detection system using Python libraries and machine learning algorithms.',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 8,
      title: ' Spotify Music Recommendation system',
      imageUrl: hospitalPhoto,
      summary: 'A content-based spotify music recommendation system using Python libraries , Spotify API.',
      codeUrl: 'https://github.com/pabhignya',
    },
    // Add more projects as needed
  ];

  return (
    <div style={{paddingLeft: '72px', overflow: 'hidden' }}>
      <Typography variant="h4" style={{ padding: '20px' }}>Projects</Typography>
      <Typography variant="h5" style={{ padding: '20px' }}>Work that I am proud of</Typography>
      <List>
        {projects.map((project) => (
          <ListItem key={project.id} style={{ marginBottom: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    width="175"
                    height="300"
                    image={project.imageUrl}
                    alt={project.title}
                  />
                </Card>
              </Grid>
              <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Slide direction="up" in={true} timeout={500}>
                  <Card style={{
                    transition: 'transform 0.5s',
                    marginLeft: '-200px',
                    marginRight: '-50px',
                    marginTop: '-20px',
                    marginBottom: '-20px',
                    transform: 'scale(1) rotate(0deg)',
                    height: '200px',
                    width: '550px',
                    backgroundColor: darkMode ? '#fff' : '#555'
                  }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1) rotate(-5deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}>
                   <CardContent style={{ position: 'relative', paddingBottom: '70px' }}>
  <Typography variant="h6" color={darkMode ? '#333' : '#fff'} style={{ fontWeight: 'bold' }}>{project.title}</Typography>
  <Typography variant="body1" color={darkMode ? '#333' : '#fff'}>{project.summary}</Typography>
  <div style={{ position: 'absolute', bottom: '20px', right: '10px' }}>
    <Button variant="contained" color="primary" href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code</Button>
  </div>
</CardContent>



                  </Card>
                </Slide>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ProjectsComponent;
