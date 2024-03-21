import React from 'react';
import { Typography, Card, CardContent, CardMedia, List, ListItem } from '@mui/material';
import { useTheme } from './ThemeProvider';
import ncrlogo from '../files/ncr.png';
import neulogo from '../files/neu.png';
import mroadslogo from '../files/mroads.jpeg';

function ExperienceComponent() {
    const { darkMode } = useTheme();

    const projects = [
        {
            id: 1,
            title: 'Teaching Assistant',
            imageUrl: neulogo,
            summary: 'Utilized Python to enhance algorithm teaching, boosting grades for non-math students. Integrated practical coding examples and problem-solving sessions, resulting in increased student proficiency and grades. Pioneered blended learning techniques in computer science education, leading to higher course completion rates. Developed custom educational tools in Python, improving student performance and satisfaction with abstract concepts.',
            codeUrl: 'https://github.com/pabhignya',
            height: '230px'
        },
        {
            id: 2,
            title: 'Data Scientist',
            imageUrl: ncrlogo,
            summary: 'Utilized Python (Pandas, Numpy), and SQL to deploy a logistic regression model with a precision of 0.81, significantly enhancing predictive accuracy. Improved data throughput and visualization on Google Cloud Platform, achieving a 20% increase in efficiency with PowerBI analytics. Leveraged TensorFlow and Keras to develop a deep learning algorithm, increasing model accuracy by 20% for customer sentiment analysis. Executed advanced data modeling techniques with Python and Scikit-learn, reducing operational costs by 15% through optimized resource allocation. Conducted comprehensive data analysis with SQL, Python, and Tableau, resulting in a 25% increase in sales revenue through targeted marketing campaigns. Implemented cloud-based data warehousing solutions on AWS, decreasing data retrieval times by 40% and supporting scalable analytics platforms.',
            codeUrl: 'https://github.com/pabhignya',
            height: '300px'
        },
        {
            id: 3,
            title: 'Software Engineer',
            imageUrl: ncrlogo,
            summary: 'Led the development of 25 screens and 7 pickers in R10, employing React TS, React Hooks, and Material-UI to elevate user satisfaction. Implemented version control best practices with Git and Bitbucket. Spearheaded performance optimization of a critical item picker feature in R10, utilizing advanced C# programming, .NET Core development, and SQL optimization, resulting in a 15% improvement in response times. Pioneered a multilingual translation feature in R10, leveraging react-i18next to expand the applications accessibility to over 50 languages, thus enhancing global market reach. Upgraded application architecture by migrating 30 controllers from .NET to .NET Core, while adopting SCRUM agile practices, significantly enhancing modularity. Fostered the technical growth of 3 interns by leading them in rapid service implementation for R10, employing CodedUI and Cypress for robust integration testing.',
            codeUrl: 'https://github.com/pabhignya',
            height: '320px'
        },
        {
            id: 4,
            title: 'Software Intern',
            imageUrl: mroadslogo,
            summary: 'Implemented payment module with React-Redux in OneDine server app, resulting in a 36% increase in efficiency and UI enhancement. Successfully addressed 15 critical bugs across OneDine customer app and Panna AI-driven interview platform using JIRA and Confluence, ensuring uninterrupted service and bolstering system reliability. Streamlined Full Stack development processes through React and SQL integration, facilitating optimized system functionality and improved data processing, meeting project milestones effectively.',
            codeUrl: 'https://github.com/pabhignya',
            height: '230px'
        },

        // Add more projects as needed
    ];
    return (

        <div style={{ paddingLeft: '72px', overflow: 'hidden' }}>
            <Typography variant="h4" style={{ padding: '20px' }}>Work Experience</Typography>
            <List style={{ padding: '36px' }}>
                {projects.map((project) => (
                    <ListItem key={project.id} style={{ marginBottom: '20px' }}>
                        <Card style={{ borderRadius: '12px',width: '100%', height:project.height, backgroundColor: darkMode ? '#fff5ee' : '#353935' }}>
                            <CardContent style={{ display: 'flex', alignItems: 'center' }}>

                                <div style={{ width: '170px', height: '170px', marginRight: '20px' }}>
                                    <CardMedia
                                        component="img"
                                        image={project.imageUrl}
                                        alt={project.title}
                                        style={{ width: '170px', height: '170px', objectFit: 'cover', padding: '16px' }}
                                    />
                                </div>

                                <div>
                                    <Typography variant="h6" color={darkMode ? '#333' : '#fff'} style={{ fontWeight: 'bold', margin: '16px'}}>{project.title}</Typography>
                                    <Typography variant="body1" color={darkMode ? '#333' : '#fff'} style={{ margin: '16px', textAlign: "justify" }}>{project.summary}</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </div>


    );
}

export default ExperienceComponent;
