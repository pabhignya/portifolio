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

function SkillsComponent() {
  return (
    <div>
      <Typography variant="h4" style={{ padding: '72px' }}>Skills</Typography>
      <Grid container spacing={1}>
        {/* Row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <PythonIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="Python" />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <JavaIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="Java" />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <ReactIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="React JS/ Native" />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <JSIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="JavaScript" />
          </ListItem>
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <TSIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="TypeScript" />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <CSSIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="CSS" />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <HtmlIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="HTML" />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <NodeJSIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="Node.JS" />
          </ListItem>
        </Grid>

        {/* Row 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <AWSIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="AWS" />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <GCPIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="Google Cloud Platform" />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <MongoDBIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="MongoDB" />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ListItemIcon style={{ minWidth: '54px' }}>
              <MYSQLIcon style={{ height: '54px', width: '54px' }} />
            </ListItemIcon>
            <ListItemText primary="MySQL" />
          </ListItem>
        </Grid>
      </Grid>
    </div>
  );
}

export default SkillsComponent;
