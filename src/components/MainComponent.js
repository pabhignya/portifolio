import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/ContactMail';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ProjectsIcon from '@mui/icons-material/Work';
import ThemeIcon from '@mui/icons-material/Brightness4';
import { useTheme } from './ThemeProvider';
import { Link as ScrollLink } from 'react-scroll';
// import ContactComponent from './ContactComponent';
import HomeComponent from './HomeComponent';
import './styles.css';
import ProjectsComponent from './ProjectsComponent';
import SkillsComponent from './SkillsComponent';
import ExperienceComponent from './ExperienceComponent';
import AboutMeCard from './AboutMeCard';

function MainComponent() {
    const { darkMode, toggleDarkMode } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = (targetId) => {
        setMenuOpen(false); // Close the menu when a menu item is clicked
    };

    const handleThemeToggle = () => {
        toggleDarkMode(); // Toggle the theme
        setMenuOpen(false); // Close the menu when toggling the theme
    };

    return (
        <div className={darkMode ? 'dark-theme' : 'light-theme'}>
            <AppBar position="fixed" style={{ width: '100%', top: 0, backgroundColor: darkMode ? '#333' : '#fff' }}>

                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <h1 style={{ color: darkMode ? '#fff' : '#000' }}>Abhignya Pachava</h1>

                    <IconButton edge="end" style={{ color: darkMode ? '#fff' : '#000' }} onClick={toggleMenu}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            >
                <List>
                    <ScrollLink to="home" spy={true} smooth={true} duration={500}>
                        <ListItem button onClick={() => handleMenuItemClick('home')}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </ScrollLink>
                    <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
                        <ListItem button onClick={() => handleMenuItemClick('contact')}>
                            <ListItemIcon>
                                <ContactIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </ScrollLink>
                    <ScrollLink to="experience" spy={true} smooth={true} duration={500}>
                        <ListItem button onClick={() => handleMenuItemClick('experience')}>
                            <ListItemIcon>
                                <WorkHistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Experience" />
                        </ListItem>
                    </ScrollLink>
                    <ScrollLink to="projects" spy={true} smooth={true} duration={500}>
                        <ListItem button onClick={() => handleMenuItemClick('projects')}>
                            <ListItemIcon>
                                <ProjectsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                        </ListItem>
                    </ScrollLink>
                    <ListItem button onClick={handleThemeToggle}>
                        <ListItemIcon>
                            <ThemeIcon />
                        </ListItemIcon>
                        <ListItemText primary={darkMode ? 'Light Mode' : 'Dark Mode'} />
                    </ListItem>
                </List>
            </Drawer>
            <div style={{ paddingTop: '20px' }}> {/* Adjust the top padding to prevent overlap with the app bar */}
                <div id="home" style={{ paddingTop: '72px' }}>
                    <HomeComponent />
                    <SkillsComponent />
                </div>
                <div id="experience" style={{ paddingTop: '72px' }}>
                    <ExperienceComponent />
                </div>
                <div id="projects" style={{ paddingTop: '72px' }}>
                    <ProjectsComponent />
                </div>
                <div id="contact" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', //paddingTop: '72px', paddingBottom: '72px'
                }}>
                    <AboutMeCard />
                    {/* <ContactComponent /> */}

                </div>
            </div>
        </div>
    );
}

export default MainComponent;
