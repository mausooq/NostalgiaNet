import { AppBar, Container, Grow, Typography,Grid } from '@material-ui/core';
import React from 'react';

import memories from './images/memories.png'
import Form from './components/Forms/Forms'
import Posts from './components/Posts/Posts'

const App = () =>{
    return(
      <Container maxWidth="lg">
        <AppBar position='static' color='inherit'>
        <Typography variant='h4' align='center'>
               NOSTALGIA NET
        </Typography>
        <img src={memories} alt='Memories' height="60"/>
        </AppBar>
       <Grow in>
        <Container>
          <Grid Container justify="space-between" alignItems="strech" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts />
                 
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Form />
                </Grid>
          </Grid>
        </Container>
          
        </Grow>
      </Container>
    )
}

export default App;