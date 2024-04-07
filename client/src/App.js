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
        <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
               NOSTALGIA NET
        </Typography>
        <img className={classes.image} src={memories} alt='Memories' height="80px"/>
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