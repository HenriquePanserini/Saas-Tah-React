import React, { Fragment, useState } from 'react'
import { Box, Typography, List, ListItem } from '@mui/material';

import NavigateComponent from './components/navigate/naviagate.component'

import 'bootstrap'
import './App.less'
import './less/mixins.less'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Box>
          <NavigateComponent/>
      </Box>
      <Box className='main-box-content' sx={{ textAlign: 'center', paddingTop: '100px' }}>
        <Box className='box-content-one' sx={{textAlign: 'center', padding: '20px', paddingTop: '80px'}}>
          <Typography className='title-one' variant="h5" sx={{ marginBottom: '20px', width: '470px'}}>
            Simplifique a Gestão da sua Empresa com nosso Sistema de SaaS
          </Typography>
          <Typography className='sub-title' variant='caption' sx={{ width: '470px'}}>
            Otimize as operações e impulsione o crescimento do seu negócio
          </Typography>
        </Box>
      </Box>
    </Fragment>
  )
}

export default App
