/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Box, Typography, Link, Button, TextField, FormControlLabel, Checkbox} from '@mui/material'

import './signin.pages.less';

function SigninPages() {

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptMsg, setAcceptMsg] = useState(false);


  return (
    <>
      <Box className="box-main">
        <Box className="box-content-one" sx={{}}>
          <Typography variant="h4" component="h4">
              Cadastre, Acesse e Realize!     
          </Typography>
          <Typography variant="inherit" component="div" color="seashell">
              <p>
                  Com uma <strong>Comunicação direta</strong> o sistema Tah! é intuitivo
                  com disposição logica de facil utilização para o usuario, possuindo 
                  <strong>Interface amigavel</strong> como o layout limpo e organizado torna 
                  a experiência do usuário mais agradável. Alem da <strong>Facilidade de aprendizado</strong>
                  para que novos usuários possam rapidamente se familiarizar com as funcionalidades básicas e 
                  uma <strong>Assistência e suporte</strong> destacando que o sistema oferece ajuda e suporte em tempo real, 
                  como dicas contextuais, guias de ajuda, tutoriais e chat de suporte.
              </p>
          </Typography>
          <img src="" alt="" />
          <img src="" alt="" />
        </Box>
        <Box className="box-content-two" sx={{}}>
          <Typography variant="h4" component="h4">Sign In</Typography>
          <form className='form-signin'>
            <div className="d-flex flex-row mb-3">
              <TextField
                  id="nome"
                  label="Nome"
                  type='text'
                  fullWidth
                  margin='normal'
                  required
                  
                />
                <TextField
                  id="sobrenome"
                  label="Sobrenome"
                  type='text'
                  fullWidth
                  margin='normal'
                  required
                />
            </div>
            <TextField
              id="email"
              label="Email"
              fullWidth
              margin='normal'
              required
            />
            <TextField
              id="reEmail"
              label="Repetir email"
              fullWidth
              margin='normal'
              required
            />
            <TextField
              id="senha"
              label="Senha"
              fullWidth
              margin='normal'
              required
            />
            <TextField
              id="reSenha"
              label="Repetir senha"
              fullWidth
              margin='normal'
              required
            />
            <div className='controlform-signin'>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    color="primary"
                  />
                }
                  label="Li e aceito os termos"
              />
              <FormControlLabel
                control={
                    <Checkbox
                      checked={acceptMsg}
                      onChange={(e) => setAcceptMsg(e.target.checked)}
                      color="primary"
                    />
                }
                label="Aceito receber mensagens"
              />
            </div>
            <div className='link-login'>
              Caso ja tenha cadastro <Link href='' alt='tela-login'>clique aqui!</Link>
            </div>       
            <Button
                className="button-signin"
                variant="contained"
                color="primary"
                fullWidth
            >
                Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </>
  )
}

export default SigninPages;