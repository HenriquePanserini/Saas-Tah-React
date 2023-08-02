/* eslint-disable no-unused-vars */
import React, {useState, Fragment} from 'react'
import { Box, Typography, Container, TextField, Button, Checkbox, Link, FormLabel} from '@mui/material'

import InfoComponent from '../../components/informative/info.component';

import './login.pages.less'

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    if (email.trim() === '' || password.trim() === '') {
      setFormError(true);
      return;
    }
  
    // Lógica para processar o envio do formulário
    console.log(`Sucesso ao logar na conta! Email:${email} Senha:${password}` )
  };

  const handleInputChange = (event) => {
      if(formError)
      {
          setFormError(false);
      }

      if(event.target.name === 'email'){
          setEmail(event.target.value);
      }else if(event.target.name === 'password'){
          setPassword(event.target.value);
      }

  }

  return (
    <>
      <Box className="main-login-container">
        <Box className="box-login-one">
            <InfoComponent />
        </Box>
        <Box className="box-login-two">
            <form className="form-container" onSubmit={handleFormSubmit}>
              <Typography className='form-login-title' variant='h4' component={'h3'}>
                  Login
              </Typography>
              <TextField 
                  label='Email'
                  type='email'
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  fullWidth
                  margin='normal'
                  required
              />
              <TextField
                  label='Password'
                  type='password'
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  fullWidth
                  margin='normal'
                  required
              />
              <div className="checkbox-login">
                <Checkbox className="ck" name="rememberMe" />
                <label className="lb">Lembre-me</label>
              </div>
              <div className="register-login">
                <span>Não possue cadastro? <Link href="/signin">Crie uma nova conta aqui</Link></span>
                <br />
              </div>
              <Button variant='contained' color='primary' type='submit' fullWidth sx={{ mt: 4 }}>
                  Login
              </Button>
              {formError && <p>Preencha todos os campos obrigatórios.</p>}
            </form>
        </Box> 
      </Box>
    </>
  )
}

export default LoginPage;