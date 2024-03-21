import React from 'react';
import { Typography, Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ReactComponent as PythonIcon } from '../icons/python-svgrepo-com.svg';
import { ReactComponent as JavaIcon } from '../icons/java-svgrepo-com.svg';
import { ReactComponent as AWSIcon } from '../icons/aws-svgrepo-com.svg';
import { ReactComponent as CSSIcon } from '../icons/css-svgrepo-com.svg';
import { ReactComponent as GitIcon } from '../icons/git-svgrepo-com.svg';
import { ReactComponent as GCPIcon } from '../icons/google-cloud-svgrepo-com.svg';
import { ReactComponent as HtmlIcon } from '../icons/html-svgrepo-com.svg';
import { ReactComponent as JSIcon } from '../icons/javascript-16-svgrepo-com.svg';
import { ReactComponent as MongoDBIcon } from '../icons/mongodb-logo-svgrepo-com.svg';
import { ReactComponent as MYSQLIcon } from '../icons/mysql-logo-svgrepo-com.svg';
import { ReactComponent as NodeJSIcon } from '../icons/nodejs01-svgrepo-com.svg';
import { ReactComponent as ReactIcon } from '../icons/react-svgrepo-com.svg';
import { ReactComponent as TSIcon } from '../icons/typescript-official-svgrepo-com.svg';
import { ReactComponent as VSCIcon } from '../icons/visual-studio-code-svgrepo-com.svg';
import { ReactComponent as PostmanIcon } from '../icons/postman.svg';
import { ReactComponent as PostgreSqlIcon } from '../icons/postgresql.svg';
import { ReactComponent as MicrosoftIcon } from '../icons/microsoft-office-2013-logo-svgrepo-com.svg';
import { ReactComponent as JupyterIcon } from '../icons/jupyter-svgrepo-com.svg';
import { ReactComponent as JiraIcon } from '../icons/jira-svgrepo-com.svg';
import { ReactComponent as BitbucketIcon } from '../icons/bitbucket-svgrepo-com.svg';

function SkillsComponent() {
  const skills = [
    { icon: <PythonIcon style={{ height: '54px', width: '54px' }} />, text: 'Python' },
    { icon: <JavaIcon style={{ height: '54px', width: '54px' }} />, text: 'Java' },
    { icon: <ReactIcon style={{ height: '54px', width: '54px' }} />, text: 'React JS/ Native' },
    { icon: <JSIcon style={{ height: '54px', width: '54px' }} />, text: 'JavaScript' },
    { icon: <TSIcon style={{ height: '54px', width: '54px' }} />, text: 'TypeScript' },
    { icon: <CSSIcon style={{ height: '54px', width: '54px' }} />, text: 'CSS' },
    { icon: <HtmlIcon style={{ height: '54px', width: '54px' }} />, text: 'HTML' },
    { icon: <NodeJSIcon style={{ height: '54px', width: '54px' }} />, text: 'Node.JS' },
    { icon: <MongoDBIcon style={{ height: '54px', width: '54px' }} />, text: 'MongoDB' },
    { icon: <MYSQLIcon style={{ height: '54px', width: '54px' }} />, text: 'MySQL' },
    { icon: <PostgreSqlIcon style={{ height: '54px', width: '54px' }} />, text: 'Postgresql' },
    { icon: <PostmanIcon style={{ height: '54px', width: '54px' }} />, text: 'Postman' },
    { icon: <AWSIcon style={{ height: '54px', width: '54px' }} />, text: 'AWS' },
    { icon: <GCPIcon style={{ height: '54px', width: '54px' }} />, text: 'Google Cloud Platform' },
    { icon: <JupyterIcon style={{ height: '54px', width: '54px' }} />, text: 'VS Code' },
    { icon: <MicrosoftIcon style={{ height: '54px', width: '54px' }} />, text: 'MS Office' },
    { icon: <VSCIcon style={{ height: '54px', width: '54px' }} />, text: 'VS Code' },
    { icon: <GitIcon style={{ height: '54px', width: '54px' }} />, text: 'Git hub' },
    { icon: <JiraIcon style={{ height: '54px', width: '54px' }} />, text: 'Jira' },
    { icon: <BitbucketIcon style={{ height: '54px', width: '54px' }} />, text: 'Bitbucket' },

  ];

  return (
    <div>
      <Typography variant="h4" style={{ padding: '72px' }}>Skills</Typography>
      <Grid container spacing={1}>
        {skills.map((skill, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ListItemIcon style={{ minWidth: '54px' }}>
                {skill.icon}
              </ListItemIcon>
              <ListItemText primary={skill.text} />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SkillsComponent;
