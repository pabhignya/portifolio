import React, { useState, useEffect, useRef } from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Grid, List, ListItem, Slide } from '@mui/material';
import { useTheme } from './ThemeProvider';
import groceryPhoto from '../files/grocery.jpeg';
import hospitalPhoto from '../files/hospital.jpg';
import todoPhoto from '../files/todo.jpg';
import amazonPhoto from '../files/amazon.jpeg';
import mnistPhoto from '../files/mnist.png';
import instaPhoto from '../files/insta.jpg';
import spotifyPhoto from '../files/spotify.jpg';
import nlpPhoto from '../files/nlp.png';

function ProjectsComponent() {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCards, setHoveredCards] = useState(Array(8).fill(false)); // Adjust the array length according to the number of projects
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(projectsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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
      imageUrl: amazonPhoto,
      summary: 'A Python-based Amazon Product Recommendation System with high accuracy using collaborative filtering techniques',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 5,
      title: '  Khoury College IG Analysis And Reach Forecasting',
      imageUrl: instaPhoto,
      summary: 'An Instagram Analysis and Reach Forecasting tool, with Power BI for intuitive data visualization, facilitating actionable insights. ',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 6,
      title: ' ML For Handwritten Digits',
      imageUrl: mnistPhoto,
      summary: 'A sophisticated Machine Learning model for Handwritten Digit Recognition ',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 7,
      title: 'NLP for Stress Detection',
      imageUrl: nlpPhoto,
      summary: 'An NLP-based Stress Detection system using Python libraries and machine learning algorithms.',
      codeUrl: 'https://github.com/pabhignya',
    },
    {
      id: 8,
      title: ' Spotify Music Recommendation system',
      imageUrl: spotifyPhoto,
      summary: 'A content-based spotify music recommendation system using Python libraries , Spotify API.',
      codeUrl: 'https://github.com/pabhignya',
    },
    // Add more projects as needed
  ];

  const handleMouseEnter = (index) => {
    const newHoveredCards = [...hoveredCards];
    newHoveredCards[index] = true;
    setHoveredCards(newHoveredCards);
  };

  const handleMouseLeave = (index) => {
    const newHoveredCards = [...hoveredCards];
    newHoveredCards[index] = false;
    setHoveredCards(newHoveredCards);
  };

  return (
    <div ref={projectsRef} style={{ paddingLeft: '72px', paddingRight: '72px', overflow: 'hidden' }}>
      <Typography variant="h4" style={{ padding: '20px' }}>Projects</Typography>
      <Typography variant="h5" style={{ padding: '20px' }}>Work that I am proud of</Typography>
      <List>
        {projects.map((project, index) => (
          <ListItem key={project.id} style={{ marginBottom: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Slide
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  in={isVisible}
                  timeout={{ enter: 1000, exit: 500 }} // Increase enter duration for a more noticeable effect
                  style={{ transitionDelay: index * 200 }} // Add a delay to each slide to stagger the animation
                >
                  <Card>
                    <CardMedia
                      component="img"
                      height="100%"
                      width="100%" // Set width to 100%
                      image={project.imageUrl}
                      alt={project.title}
                    />
                  </Card>
                </Slide>
              </Grid>
              <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Slide
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  in={isVisible}
                  timeout={{ enter: 1000, exit: 500 }} // Increase enter duration for a more noticeable effect
                  style={{ transitionDelay: index * 200 }} // Add a delay to each slide to stagger the animation
                >
                  <Card
                    style={{
                      marginLeft: '-200px',
                      marginRight: '-50px',
                      marginTop: '-20px',
                      marginBottom: '-20px',
                      textAlign: "justify",
                      borderRadius: '12px',
                      transition: 'transform 0.5s, box-shadow 0.5s',
                      height: '200px',
                      width: '550px',
                      backgroundColor: darkMode ? '#fff' : '#555',
                      transform: hoveredCards[index] ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: hoveredCards[index] && !darkMode ? '0px 0px 20px 2px rgba(0,0,0,0.75)' : hoveredCards[index] && darkMode ? '0px 0px 20px 2px rgba(255,255,255,0.75)' : '0px 0px 0px 0px rgba(0,0,0,0.75)', // Adjusted boxShadow based on hover state and darkMode
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <CardContent style={{ position: 'relative', paddingBottom: '70px' }}>
                      <Typography variant="h6" color={darkMode ? '#333' : '#fff'} style={{ fontWeight: 'bold' }}>{project.title}</Typography>
                      <Typography variant="body1" color={darkMode ? '#333' : '#fff'}>{project.summary}</Typography>
                      <div style={{ position: 'absolute', bottom: '20px', right: '10px' }}>
                        <Button variant="contained" style={{ color: darkMode ? '#fff' : '#333', background: darkMode ? '#333' : '#fff' }} href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code</Button>
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
