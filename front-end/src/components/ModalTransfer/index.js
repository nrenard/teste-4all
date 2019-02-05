import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  Form,
  Alert,
  ListCard
} from './styles';
import {
  PageTitle,
  ButtonsWrapper,
  ErrorMessage,
} from '../../styles/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CardsActions } from '../../store/ducks/cards';
import { Creators as ContactsActions } from '../../store/ducks/contacts';
import { Creators as TranfersActions } from '../../store/ducks/transfers';
import { Creators as UserActions } from '../../store/ducks/user';

import formatMoney from '../../helpers/formatMoney';

import Input from '../Input';
import Select from '../Select';

const preventPropagation = event => {
  event.stopPropagation();
}

const initialState = {
  value: "",
  contact: "",
  error: null,
  errorAmount: false,
  cardActive: null,
  passwordVerified: null,
};

class ModalTransfer extends Component {

  static propTypes = {
    cards: PropTypes.shape({
      list: PropTypes.array,
      loading: PropTypes.bool,
    }).isRequired,
    contacts: PropTypes.shape({
      list: PropTypes.array,
      loading: PropTypes.bool,
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      amount: PropTypes.number
    }).isRequired,

    getCards:PropTypes.func.isRequired,
    getContacts:PropTypes.func.isRequired,
    getUser:PropTypes.func.isRequired,
    addTransfer:PropTypes.func.isRequired,
  };

  state = initialState;

  componentDidMount() {
    const { cards, contacts, user } = this.props;

    if (!cards.list) {
      this.props.getCards();
    }

    if (!contacts.list) {
      this.props.getContacts();
    }

    if (!user.name && !user.email) {
      this.props.getUser();
    }
  }

  handleChangeValue = event => {
    const value = event.target.value;
    this.setState({ value: value < 0 ? 0 : value });
  }

  handleChangeContact = event => {
    this.setState({ contact: event.target.value });
  }

  verifyAmount = event => {
    if (event) {
      event.preventDefault();
    }

    if (this.state.value > this.props.user.amount && !this.state.cardActive) {
      this.setState({ errorAmount: true });
    } else {
      this.submitForm();
    }
  }

  submitForm = event => {
    if (event) {
      event.preventDefault();
    }

    const { value, contact, passwordVerified } = this.state;

    const errors = [];

    if (!contact) {
      errors.push("Selecionar um contato para fazer uma transferência.");
    }

    if (value === 0) {
      errors.push("Favor colocar uma valor valido.");
    }

    if (value > 1000 && !passwordVerified) {
      this.needPassword();
      return false;
    }

    if (errors.length > 0) {
      this.setState({ errors });
      return false;
    } else {
      this.props.addTransfer({
        contact_id: parseFloat(this.state.contact),
        value: parseFloat(this.state.value)
      });

      this.onClose();
    }
  }

  onClose = event => {
    if (event) {
      event.preventDefault();
    }

    this.setState(initialState, this.props.onClose);
  }

  setCard = id => {
    this.setState({
      cardActive: id
    }, this.verifyAmount);
  }

  needPassword = () => {
    this.setState({ passwordVerified: false });
  }

  setPassword = () => {
    this.setState({
      passwordVerified: true
    }, this.verifyAmount);
  }

  render() {

    const {
      value,
      contact,
      errors,
      errorAmount,
      passwordVerified
    } = this.state;

    const { isOpen, cards, contacts } = this.props;

    return (
      <Container isOpen={isOpen} onClick={this.onClose}>
        <Content onClick={preventPropagation}>
          <PageTitle>Trasferir</PageTitle>

          <Form>
            <Select
              label="Contato"
              name="email"
              handleChange={this.handleChangeContact}
              value={contact}
            >
              <option value="">Selection um contato</option>

              {contacts.list && contacts.list.map(item => (
                <option
                  key={item.contact.id}
                  value={item.contact.id}
                >
                  {item.contact.email}
                </option>
              ))}
            </Select>

            <Input
              value={value}
              label="Valor"
              name="value"
              handleChange={this.handleChangeValue}
              active={true}
              type="number"
            >
              <p>R$ {formatMoney(value || 0)}</p>
            </Input>

            {errors && errors.map((erro, index) => (
              <ErrorMessage key={index}>* {erro}</ErrorMessage>
            ))}

            <ButtonsWrapper>
              <button onClick={this.onClose}>cancelar</ button>

              <button type="submit" onClick={this.verifyAmount}>
                Trasferir
              </button>
            </ButtonsWrapper>
          </Form>

          {contacts.list && contacts.list.length === 0 && (
            <Alert>
              <p>Para transferir é necessário ter um contato ou mais cadastrados.</p>
              <ButtonsWrapper>
                <Link to="/contacts">Área de contatos</Link>
              </ButtonsWrapper>
            </Alert>
          )}

          {errorAmount &&
            <Alert>
              {cards.list && cards.list.length > 0 ? (
                <>
                  <p>Saldo insuficiente, favor selecionar um cartão para completar a transferência.</p>

                  <ListCard>
                    {cards.list.map(item => (
                      <li key={item.id}>
                        {item.number}

                        <ButtonsWrapper>
                          <button onClick={this.setCard.bind(null, item.id)}>Selecionar</button>
                        </ButtonsWrapper>
                      </li>
                    ))}
                  </ListCard>
                </>
              ) : (
                <>
                  <p>Saldo insuficiente, favor cadastrar um cartão para proseguir.</p>

                  <ButtonsWrapper>
                    <Link to="/cards">Área de cartões</Link>
                  </ButtonsWrapper>
                </>
              )}
            </Alert>
          }

          {!passwordVerified && passwordVerified !== null && (
            <FormVerifyPassword setPassword={this.setPassword} email={this.props.user.email} />
          )}
        </Content>
      </Container>
    );
  }
}

class FormVerifyPassword extends Component {

  state = {
    password: "",
    error: null,
  };

  subitForm = async event => {
    if (event) {
      event.preventDefault();
    }

    const data = await api.post('/login', {
      email: this.props.email,
      password: this.state.password
    });

    if (data.error) {
      this.setState({ error: data.error })
    } else {
      this.setState({
        password: "",
        error: null
      }, this.props.setPassword);
    }
  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  }

  render() {

    const { error } = this.state;

    return (
      <Alert>
        <p>Transferência acima R$ 1000,00 precisa de senha.</p>

        <Form onSubmit={this.subitForm}>
          <Input
            value={this.state.password}
            label="Senha"
            name="senha"
            handleChange={this.handleChangePassword}
            active={true}
            type="password"
          />

          {error && (
            <ErrorMessage>* {error}</ErrorMessage>
          )}

          <ButtonsWrapper style={{ padding: 0 }}>
            <button type="submit">Enviar</button>
          </ButtonsWrapper>
        </Form>
      </Alert>
    );
  }
}

const mapStateToProps = ({ cards, contacts, user }) => ({ cards, contacts, user });

const mapDispatchToProps = dispatch => bindActionCreators({
  getCards: CardsActions.getCards,
  getContacts: ContactsActions.getContacts,
  getUser: UserActions.getUser,
  addTransfer: TranfersActions.addTransfer
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalTransfer);
