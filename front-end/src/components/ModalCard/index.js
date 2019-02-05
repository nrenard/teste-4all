import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Form } from './styles';
import { PageTitle, ButtonsWrapper, ErrorMessage } from '../../styles/components';

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
  error: null,
};

class AddCart extends Component {

  static propTypes = {
    card: PropTypes.object,

    addCard: PropTypes.func.isRequired,
    editCard: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };

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

  verifyFields = () => {
    const { number, cvv, holder, expiration, } = this.state;

    const numberNotSpaces = number.replace(/\s/g, "");
    const reGexNumber = /^-?[0-9]+$/;
    const reGexExpiration = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

    if (!reGexNumber.test(numberNotSpaces)) {
      this.setState({ error: "Campo número está inválido. Ex: 1234 4321 9874 6547" });
    } else if (numberNotSpaces.length !== 16) {
      this.setState({ error: "Número tem deve ter 16 caracteres." });
    } else if (cvv.toString().length != 3) {
      this.setState({ error: "Cvv tem deve ter 3 caracteres." });
    } else if (holder.length < 3) {
      this.setState({ error: "Titular deve ter no mínimo 3 caracteres." });
    } else if (!reGexExpiration.test(expiration)) {
      this.setState({ error: "Campo vencimento está inválido. Ex: 10/20" });
    } else {
      this.setState({ error: null }, this.submitForm);
    }
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
      error,
    } = this.state;

    const { isOpen, card } = this.props;

    const isEditing = !!card;

    console.log('error: ', error);

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

            {error && (
              <ErrorMessage>{error}</ErrorMessage>
            )}
          </Form>

          <ButtonsWrapper>
            <button onClick={this.onClose}>cancelar</ button>

            <button type="submit" onClick={this.verifyFields}>
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
