import React, { Fragment, useState } from 'react'
import { Box, Typography, List, ListItem, Button, Container} from '@mui/material';

import './landing.pages.less'

function LandingPages() {
  return (
      <>
        <Box className='box-content-one' sx={{textAlign: 'center', padding: '20px', paddingTop: '80px'}}>
            <div className='divider-title'>
              <Typography className='title-one' variant="h5" sx={{ marginBottom: '10px', width: '470px'}}>
                Simplifique a Gestão da sua Empresa com nosso Sistema de SaaS
              </Typography>
              <Typography className='sub-title' variant='caption' sx={{ marginBottom: '20px', width: '470px'}}>
                Otimize as operações e impulsione o crescimento do seu negócio
              </Typography>
              <div>
                <Button className='button-content' variant='outlined'>
                    <span>Cadastre-se Gratis!</span>
                </Button>
              </div>
            </div>
            <div className='divider-img'>
              <img className='img-note' alt='descrição imagem' src="/public/img/note-dashboard.png"/>
            </div>
          </Box>
          <Box className="box-content-two" sx={{textAlign: 'center', padding: '40px', paddingTop: '40px'}}>
            <div className='text-box'>
              <Typography className='title-two' variant="h5" sx={{ marginBottom: '10px', width: '470px'}}>
                A Tah! e voce, juntos em busca de alavancar e destacar sua empresa no serne da gestão
              </Typography>
              <Typography className='description-one' variant="inherit" sx={{ marginBottom: '10px', width: '470px'}}>
                Nosso sistema de Software as a Service (SaaS) é a solução completa para gerenciar e impulsionar o sucesso da sua empresa. 
                Com uma ampla gama de recursos e funcionalidades, 
                oferecemos uma plataforma intuitiva e flexível que se adapta às necessidades específicas do seu negócio.
              </Typography>
            </div>
          </Box>
      </>
  )
}

export default LandingPages