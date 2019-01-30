import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content, Nav } from './styles';

const Header = () =>(
  <Container>
    <Content>
      <h1>Ekki​</h1>

      <Nav>
        <NavLink to="/"> home </NavLink>
      </Nav>
    </Content>
  </Container>
);

export default Header;
