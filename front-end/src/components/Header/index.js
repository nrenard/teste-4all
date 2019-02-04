import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { isAuthenticated } from '../../services/auth';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/user';

import { Container, Nav, User } from './styles';
import { Content } from '../../styles/components';

class Header extends PureComponent {

  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,

    getUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.getUser();
    }
  }

  render() {
    const { user } = this.props;

    return(
      <Container>
        <Content>
          <h1>Ekki​</h1>

          <Nav>
            <Link to="/">home</Link>
            <Link to="/cards">cartões</Link>
            <Link to="/contacts">Contatos</Link>
            <Link to="/transfers">Transferências</Link>
          </Nav>

          {!user.loading &&(
            <User>
              <strong>{user.name}</strong>
              <p>{user.email}</p>

              <Link to="/logout">
                <div>
                  sair
                </div>
              </Link>
            </User>
          )}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser: UserActions.getUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
