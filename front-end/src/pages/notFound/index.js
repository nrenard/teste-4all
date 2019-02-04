import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { ButtonsWrapper } from '../../styles/components';

const NotFound = ({ history }) => (
  <Container>
    Página não encontrada.

    <ButtonsWrapper>
      <button onClick={() => history.push('/')}>Voltar</button>
    </ButtonsWrapper>
  </Container>
);

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
};

export default NotFound;
