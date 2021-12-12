import React from 'react';
import { Container } from '../../styles/GlobalStyles';

import { Title, Paragrafo } from './styled';

const Login = function () {
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem aushuahsud hdawdad</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
};

export default Login;
