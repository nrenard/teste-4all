import React, { Component } from 'react';

import { Container, Content, Form } from './styles';
import { PageTitle, ButtonsWrapper } from '../../styles/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CardsActions } from '../../store/ducks/cards';

import Input from '../Input';

const preventPropagation = event => {
  event.stopPropagation();
}

const initialState = {
  number: "",
  cvv: "",
  holder: "",
  expiration: "",
};

class AddCart extends Component {

  state = initialState;

  componentWillReceiveProps({ card }) {
    if (card) {
      this.setState(card);
    }
  }

  handleChangeNumber = event => {
    this.setState({ number: event.target.value });
  }

  handleChangeCvv = event => {
    const value = event.target.value
    if (value.length < 4) {
      this.setState({ cvv: value });
    }
  }

  handleChangeHolder = event => {
    this.setState({ holder: event.target.value });
  }

  handleChangeExpiration = event => {
    this.setState({ expiration: event.target.value });
  }

  submitForm = () => {
    if (this.props.card) {
      this.props.editCard(this.state);
    } else {
      this.props.addCard(this.state);
    }
    this.onClose();
  }

  onClose = event => {
    if (event) {
      event.preventDefault();
    }

    this.setState(initialState, this.props.onClose);
  }

  render() {

    const {
      number,
      cvv,
      holder,
      expiration,
    } = this.state;

    const { isOpen, card } = this.props;

    const isEditing = !!card;

    return (
      <Container isOpen={isOpen} onClick={this.onClose}>
        <Content onClick={preventPropagation}>
          <PageTitle>{isEditing ? "Editar cartão" : "Adicionar cartão"} </PageTitle>

          <Form>
            <Input
              value={number}
              label="Número"
              name="number"
              handleChange={this.handleChangeNumber}
              maxLength={19}
            />

            <Input
              value={cvv}
              label="Cvv"
              name="cvv"
              handleChange={this.handleChangeCvv}
              type="number"
              maxLength={3}
            />

            <Input
              value={holder}
              label="Titular"
              name="holder"
              handleChange={this.handleChangeHolder}
            />

            <Input
              value={expiration}
              label="Vencimento"
              name="expiration"
              handleChange={this.handleChangeExpiration}
              maxLength={5}
            />
          </Form>

          <ButtonsWrapper>
            <button onClick={this.onClose}>cancelar</ button>

            <button type="submit" onClick={this.submitForm}>
              {isEditing ? "Salvar" : "Adicionar"}
            </button>
          </ButtonsWrapper>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addCard: CardsActions.addCard,
  editCard: CardsActions.editCard,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddCart);
