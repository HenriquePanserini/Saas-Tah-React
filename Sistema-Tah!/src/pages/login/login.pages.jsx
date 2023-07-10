import React, {useState, useEffect, Fragment} from 'react'
import { Box, Typography, Container, TextField, Button } from '@mui/material'

import './login.pages.less'

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Fragment class="d-flex flex-column">
       <Box className="box-login-one">
          <Typography className="box-login-title" variant='h3' component="title" sx={{flexGrow: 1}}>
             Tah!
          </Typography>
          <Typography variant='inherit' component="section">
                <p>
                  Bem-vindo(a) ao <strong>Tah!</strong> 
                  O seu sistema de SaaS para gerenciamento simplificado.
                </p>
                <p>
                  O Tah! é a solução perfeita para ajudar você a 
                  otimizar e simplificar a gestão da sua empresa. 
                  Com uma interface intuitiva e recursos poderosos, o Tah! 
                  oferece tudo o que você precisa para gerenciar 
                  suas operações de forma eficiente.
                </p>
                <p>
                  Desde finanças e vendas até projetos e recursos humanos, o Tah! 
                  centraliza todas as informações em um só lugar, 
                  proporcionando visibilidade completa e facilitando a 
                  tomada de decisões estratégicas.
                </p>
                <p>
                  Com o Tah!, você pode automatizar tarefas, 
                  melhorar a colaboração entre equipes, 
                  obter análises em tempo real e muito mais. 
                  Nosso objetivo é tornar a gestão da sua empresa mais eficiente, 
                  para que você possa focar no crescimento 
                  e no sucesso do seu negócio.
                </p>
                <p>
                  Experimente agora mesmo o Tah! 
                  e descubra como ele pode transformar 
                  a forma como você gerencia sua empresa. 
                  Faça login e embarque nessa jornada de simplificação e 
                  eficiência!
                </p>
                <p>
                  Junte-se a nós e comece a aproveitar todos os benefícios do Tah!. 
                  Simplifique, gerencie, cresça.
                </p>
          </Typography>
       </Box>
       <Box className="box-login-two">
          <Container>
             <Typography className='form-login-title' variant='h4' component={'h3'}>
                Login
             </Typography>
             <TextField 
                label='Email'
                type='email'
                value={email}
                onChange={handleEmailChange}
                fullWidth
                margin='normal'
             />
             <TextField
                label='Password'
                type='password'
                value={password}
                onChange={handlePasswordChange}
                fullWidth
                margin='normal'
             />
             <Button variant='contained' color='primary' onChange={handleLogin} fullWidth sx={{ mt: 4 }}>

             </Button>

          </Container>
       </Box> 
    </Fragment>
  )
}

export default LoginPage;