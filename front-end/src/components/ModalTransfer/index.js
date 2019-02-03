import React, { Component } from 'react';

import { Container, Content, Form } from './styles';
import { PageTitle, ButtonsWrapper } from '../../styles/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CardsActions } from '../../store/ducks/cards';

import formatMoney from '../../helpers/formatMoney';

import Input from '../Input';

const preventPropagation = event => {
  event.stopPropagation();
}

const initialState = {
  value: 0,
  email: "",
};

class ModalTransfer extends Component {

  state = initialState;

  componentDidMount() {
    if (!this.props.cards.list) {
      this.props.getCards();
    }
  }

  handleChangeValue = event => {
    this.setState({ value: event.target.value });
  }

  submitForm = () => {
    console.log('submitForm');
    this.onClose();
  }

  onClose = event => {
    if (event) {
      event.preventDefault();
    }

    this.setState(initialState, this.props.onClose);
  }

  render() {

    const { value, email } = this.state;

    const { isOpen, cards } = this.props;

    console.log('cards: ', cards);

    return (
      <Container isOpen={isOpen} onClick={this.onClose}>
        <Content onClick={preventPropagation}>
          <PageTitle>Trasferir</PageTitle>

          <Form>
            <Input
              value={email}
              label="Contato"
              name="email"
              handleChange={() => {}}
              disabled={false}
            />

            <Input
              value={value}
              label="Valor"
              name="value"
              handleChange={this.handleChangeValue}
            />
          </Form>

          <ButtonsWrapper>
            <button onClick={this.onClose}>cancelar</ button>

            <button type="submit" onClick={this.submitForm}>
              Trasferir
            </button>
          </ButtonsWrapper>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ cards }) => ({ cards });

const mapDispatchToProps = dispatch => bindActionCreators({
  getCards: CardsActions.getCards,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalTransfer);
