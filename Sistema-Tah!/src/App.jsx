/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react'
import { Box, Typography, List, ListItem, Button, Container} from '@mui/material';
 
import NavigateComponent from './components/navigate/naviagate.component'
import LandingPages from './pages/landing/landing.pages';

import './App.less'
import './less/mixins.less'

function App() {

  return (
    <Fragment class="d-flex flex-column">
      <Box className='nav-bar'>
          <NavigateComponent/>
      </Box>
      <Box className="main-box-content" sx={{ textAlign: 'center', paddingTop: '72px' }}>
        <LandingPages/>
      </Box>
    </Fragment>
  )
}

export default App
