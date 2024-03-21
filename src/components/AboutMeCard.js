import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useTheme } from './ThemeProvider';

function AboutMeCard() {
    const { darkMode } = useTheme();
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh', 
        }}>
            <Card
                elevation={3}
                style={{
                    width: '400px',
                    height: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.5s',
                    transform: `rotateY(${flipped ? 180 : 0}deg)`,
                    borderRadius: '12px',
                    background: darkMode ? '#fff' : '#333',
                    color: darkMode ? '#333' : '#fff'
                }}
            >
                <CardContent
                    style={{
                        textAlign: 'center',
                        transform: `rotateY(${flipped ? -180 : 0}deg)`, // Apply separate transformation to back content
                    }}
                >
                    {flipped ? (
                        <div>
                            <Typography variant="h5" style={{ fontWeight: 'bold' }}>Contact Details</Typography>
                            <Typography>
                                Email: {' '}
                                <a href="mailto:abhignya.p@northeastern.com" style={{ color: darkMode ? '#333' : '#fff' }}>abhignya.p@northeastern.com</a>

                            </Typography>
                            <Typography>Phone: +16298994020</Typography>
                            <Typography>
                                LinkedIn:{' '}
                                <a
                                    href="https://www.linkedin.com/in/pachava-abhignya-778436141/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: darkMode ? '#333' : '#fff' }}
                                >
                                    Pachava Abhignya
                                </a>
                            </Typography>
                        </div>
                    ) : (
                        <div>
                            <Typography variant="h5" style={{ fontWeight: 'bold' }}>About Me</Typography>
                            <Typography>
                                I am Abhignya Pachava, a Northeastern University graduate with over two years of professional experience in retail and hospitality industries. Passionate about delivering exceptional customer experiences and driving business growth.
                            </Typography>
                        </div>
                    )}
                    <Button onClick={handleFlip} style={{ marginTop: '20px', color: darkMode ? '#fff' : '#333', background: darkMode ? '#333' : '#fff' }}>
                        {flipped ? 'About me' : 'Contact'}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default AboutMeCard;
