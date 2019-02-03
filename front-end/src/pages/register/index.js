import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  Content,
  Form,
  ButtonsWrapper,
} from './styles';
import { ErrorMessage, SuccessMessage, } from '../../styles/components';

import Input from '../../components/Input';

class Login extends Component {

  state = {
    email: '',
    name: '',
    password: '',
    error: null,
    successRegister: false,
  };

  componentWillUnmount() {
    clearTimeout(this.redirectToLogin);
  }

  redirectToLogin = null;

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeEmail = ({ target }) => {
    this.setState({ email: target.value });
  }

  handleChangePassword = ({ target }) => {
    this.setState({ password: target.value });
  }

  submitForm = async event => {
    if (event) {
      event.preventDefault();
    }

    try {
      const data = await api.post('/register', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      });

      if (!data.error) {
        this.setState({
          successRegister: true,
          error: null,
        }, () => {
          this.redirectToLogin= setTimeout(() => this.props.history.push('/login'), 1000);
        })
      } else {
        this.setState({ error: data.error });
      }
    } catch (err) {
      console.log('err: ', err);
    }
  }

  render() {

    const {
      name,
      email,
      password,
      error,
      successRegister
    } = this.state;

    return (
      <Container>
        <Content>
          <h1>Ekki</h1>

          <Form onSubmit={this.submitForm}>
            <Input
              handleChange={this.handleChangeName}
              label='Nome:'
              value={name}
              type='name'
              name='name'
              autoFocus={true}
            />

            <Input
              handleChange={this.handleChangeEmail}
              label='Email:'
              value={email}
              type='email'
              name='email'
            />

            <Input
              handleChange={this.handleChangePassword}
              label='Senha:'
              value={password}
              type='password'
              name='password'
            />

            {error && (
              <ErrorMessage>* {error}</ErrorMessage>
            )}

            {successRegister && (
              <SuccessMessage>Usuário cadastrado com sucesso!</SuccessMessage>
            )}

            <ButtonsWrapper>
              <button>registrar-se</button>
              <Link to="/login">Entrar</Link>
            </ButtonsWrapper>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
