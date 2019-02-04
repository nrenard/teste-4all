import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../store/ducks/users';
import { Creators as ContacsActions } from '../../store/ducks/contacts';

import { Container } from './styles';
import { List, PageTitle, ButtonsWrapper } from '../../styles/components';

class ListUsers extends Component {

  static propTypes = {
    contacts: PropTypes.shape({
      list: PropTypes.array,
      loading: PropTypes.bool,
    }).isRequired,
    users: PropTypes.shape({
      list: PropTypes.array,
      loading: PropTypes.bool,
    }).isRequired,

    getContacts: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    addContact: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (!this.props.users.list) {
      this.props.getUsers();
    }

    if (!this.props.contacts.list) {
      this.props.getContacts();
    }
  }

  render () {

    const { users, contacts } = this.props;

    return (
      <Container>
        <PageTitle>
          Lista de usuários
        </PageTitle>

        <List loading={users.loading}>
          {users.list && (
            <ul>
              {users.list.map(item => {
                if (!contacts.list.find(contact => contact.contact_id === item.id)) {
                  return (
                    <li key={item.id}>
                      <div>
                          <p>
                            Nome:
                            <strong>{item.name}</strong>
                          </p>
                          <p>
                            Email:
                            <strong>{item.email}</strong>
                          </p>
                      </div>
                      <div>
                        <ButtonsWrapper>
                          <button onClick={this.props.addContact.bind(null, item)}>Adicionar</button>
                        </ButtonsWrapper>
                      </div>
                    </li>
                  )
                }

                return null;
              })}

              {users.list.length === 0 && (
                <li>Nenhum usuário encontrado.</li>
              )}
            </ul>
          )}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = ({ users, contacts }) => ({ users, contacts });

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers: UsersActions.getUsers,
  addContact: ContacsActions.addContact,
  getContacts: ContacsActions.getContacts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
