import React, { Component } from 'react';

import api from '../../services/api';

import { Container, Content, Form, ButtonsWrapper } from './styles';
import { ErrorMessage, SuccessMessage, } from '../../styles/components';

import { Link } from 'react-router-dom';

import Input from '../../components/Input';

class Login extends Component {

  state = { 
    email: '', 
    password: '',
    error: null,
    successLogin: false,
  };

  componentWillUnmount() {
    clearTimeout(this.redirectToDashboard);
  }

  redirectToDashboard = null;

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
      const { data } = await api.post('/login', { 
        email: this.state.email,
        password: this.state.password,
      });
      console.log('data: ', data);
      if (!data.error) {

        await localStorage.setItem('token', data.token);

        this.setState({ 
          successLogin: true,
          error: null,
        }, () => {
          this.redirectToDashboard = setTimeout(() => this.props.history.push('/'), 3000);
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
      email, 
      password,
      error,
      successLogin,
    } = this.state;

    return (
      <Container>
        <Content>
          <h1>Ekki</h1>
    
          <Form onSubmit={this.submitForm}>
            <Input 
              handleChange={this.handleChangeEmail}
              label='Seu email:'
              value={email}
              type='email'
              name='email'
            />

            <Input 
              handleChange={this.handleChangePassword}
              label='Sua senha:'
              value={password}
              type='password'
              name='password'
            />

            {error && (
              <ErrorMessage>* {error}</ErrorMessage>
            )}
            
            {successLogin && (
              <SuccessMessage>Usuário cadastrado com sucesso!</SuccessMessage>
            )}
            
            <ButtonsWrapper>
              <button>Entrar</button>
              <Link to="/register">registrar-se</Link>
            </ButtonsWrapper>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
