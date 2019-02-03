import React from 'react';

import { Container } from './styles';
import { ButtonsWrapper } from '../../styles/components';

const notFound = ({ history }) => (
  <Container>
    Página não encontrada.

    <ButtonsWrapper>
      <button onClick={() => history.push('/')}>Voltar</button>
    </ButtonsWrapper>
  </Container>
);

export default notFound;
