/* eslint-disable no-unused-vars */

import React, {useState, Fragment} from 'react';
import { Box, Typography, Container, TextField, Button, Checkbox, Link, FormLabel} from '@mui/material'

import './info.component.less'

function InfoComponent() {
  return (
    <>
      <Typography className="box-login-title" variant='h3' component="h3">
         Tah!
      </Typography>
      <Typography className="box-login-content" variant="inherit" component="section">
         <p>
           Bem-vindo(a) ao <strong>Tah! </strong> 
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
      <img className="img-one-login" src="./public/img/1.png" alt="Imagem um" />
      <img className="img-two-login" src="./public/img/2.png" alt="Imagem dois" />
    </>
  )
}

export default InfoComponent;