/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

//Mui Components
import { Box, Link, Toolbar, Typography }from '@mui/material'
import { AppBar } from '@mui/material'
import { Button } from '@mui/material'
 
//React icons
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

// Styled less
import './navigate.component.less'

const styles = {
   appBar: {
     top: 0,
     left: 'auto',
     right: 0,
     position: 'fixed',
     width: '100%',
     zIndex: 9999,
   },
 };

function NavigateComponent() {
  return (
     <Box className='nav-box' sx={{ flexGrow: 1, margin: 0, padding: 0 }}>
        <AppBar className='nav-bar' style={styles.appBar} elevation={0}>
            <Typography className='nav-title' variant='h3' component='div' sx={{ flexGrow: 1}}>
               <Link href='/' underline='none' color='inherit'>
                  Tah!
               </Link>
            </Typography>
            <Toolbar className='nav-toolbar'>
               <Link href='/'><BsLinkedin/></Link>
               <Link href='/'><FaFacebookSquare/></Link>
               <Link href='/'><BsInstagram/></Link>
               <Button className='nav-button' variant='outlined'>
                  <NavLink id="nav-link" to="/login" activeClassName="active">Acessar Conta</NavLink>
               </Button>
            </Toolbar>
        </AppBar>
     </Box>
  )
}

export default NavigateComponent