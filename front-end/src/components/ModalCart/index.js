import React, { Component } from 'react';

import { Container, Content, Form } from './styles';
import { PageTitle, ButtonsWrapper } from '../../styles/components';

import Input from '../Input';

const preventPropagation = event => {
  event.stopPropagation();
}

class AddCart extends Component {

  state = {
    number: "",
    cvv: "",
    holder: "",
    expiration: "",
  };

  handleChangeNumber = event => {
    this.setState({ number: event.target.value });
  }

  handleChangeCvv = event => {
    this.setState({ cvv: event.target.value });
  }

  handleChangeHolder = event => {
    this.setState({ holder: event.target.value });
  }

  handleChangeExpiration = event => {
    this.setState({ expiration: event.target.value });
  }

  render() {

    const {
      number,
      cvv,
      holder,
      expiration,
    } = this.state;

    const { isOpen } = this.props;

    return (
      <Container isOpen={isOpen} onClick={this.props.onClose}>
        <Content onClick={preventPropagation}>
          <PageTitle>{isOpen === true ? "Editar cartão" : "Adicionar cartão"} </PageTitle>

          <Form>
            <Input
              value={number}
              label="Número"
              name="number"
              handleChange={this.handleChangeNumber}
            />
          </Form>
        </Content>
      </Container>
    );
  }
}

export default AddCart;
