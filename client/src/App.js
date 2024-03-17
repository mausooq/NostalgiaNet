import { AppBar, Container, Typography } from '@material-ui/core';
import React from 'react';

import memories from './images/memories.png'

const App = () =>{
    return(
      <Container maxWidth="lg">
        <AppBar position='static' color='inherit'>
        <Typography variant='h4' align='center'>
               NOSTALGIA NET
        </Typography>
        <img src={memories} alt='Memories' height="60"/>
        </AppBar>
      </Container>
    )
}

export default App;