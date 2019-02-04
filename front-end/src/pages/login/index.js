import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/user';

import { setToken } from '../../services/auth';

import api from '../../services/api';

import { Container, Content, Form } from './styles';
import { ErrorMessage, SuccessMessage, ButtonsWrapper } from '../../styles/components';

import { Link } from 'react-router-dom';

import Input from '../../components/Input';

class Login extends Component {

  static propTypes = { setUser: PropTypes.func.isRequired, };

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

    clearTimeout(this.redirectToDashboard);

    try {
      const data = await api.post('/login', {
        email: this.state.email,
        password: this.state.password,
      });

      if (!data.error) {
        setToken(data.token);
        this.props.setUser(data.user);

        this.setState({
          successLogin: true,
          error: null,
        }, () => {
          this.redirectToDashboard = setTimeout(() => window.location.pathname = "/", 1000);
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
              label='Email:'
              value={email}
              type='email'
              name='email'
              autoFocus={true}
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

            {successLogin && (
              <SuccessMessage>Login efetuado com sucesso!</SuccessMessage>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  setUser: UserActions.setUser,
}, dispatch);

export default connect(null, mapDispatchToProps)(Login);
