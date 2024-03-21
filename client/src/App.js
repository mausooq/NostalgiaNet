import { AppBar, Container, Grow, Typography,Grid } from '@material-ui/core';
import React from 'react';

import memories from './images/memories.png'
import Form from './components/Forms/Forms'
import Posts from './components/Posts/Posts'
import useStyles from './style'
const App = () =>{
  const classes= useStyles();
    return(
      <Container maxWidth="lg">
        <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
               NOSTALGIA NET
        </Typography>
        <img src={memories} alt='Memories' height="500px"/>
        </AppBar>
       <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts />
                 
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form />
                </Grid>
          </Grid>
        </Container>
          
        </Grow>
      </Container>
    )
}

export default App;