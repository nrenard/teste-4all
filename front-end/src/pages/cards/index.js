import React from 'react';

import { Container, ListCard, HeaderList } from './styles';
import { Content, PageTitle } from '../../styles/components';

const cards = () => (
  <Container>
    <Content>
      <PageTitle>Cartões</PageTitle>

      <ListCard>
        <HeaderList>
          <div>
            <p className="number">Número</p>
            <p className="holder">Titular</p>
            <p className="maturity">vencimento</p>
            <p className="ccv">CCV</p>
          </div>
          <div>
            <p className="actions">ações</p>
          </div>
        </HeaderList>
        <ul>
          <li>
            <div>
              <p className="number">1234 4321 7894 6542</p>
              <p className="holder">Nicolas Y Z Renard</p>
              <p className="maturity">02/21</p>
              <p className="ccv">123</p>
            </div>
            <div>
              <p className="actions">excluir</p>
            </div>
          </li>
          <li>a</li>
        </ul>
      </ListCard>
    </Content>
  </Container>
);

export default cards;
