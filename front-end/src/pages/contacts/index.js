import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ContactsActions } from '../../store/ducks/contacts';

import ListUsers from '../../components/ListUsers';

import { Container } from './styles';
import {
  Content,
  PageTitle,
  ButtonsWrapper,
  HeaderPage,
  List,
} from '../../styles/components';

class Contacts extends Component {

  static propTypes = {
    contacts: PropTypes.shape({
      list: PropTypes.array,
      loading: PropTypes.bool,
    }).isRequired,

    getContacts: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  state = { activeListUsers: false };

  componentDidMount() {
    if (!this.props.contacts.list) {
      this.props.getContacts();
    }
  }

  openListUsers = () => {
    this.setState({ activeListUsers: true });
  }

  closeListUsers = () => {
    this.setState({ activeListUsers: false });
  }

  render () {

    const { contacts } = this.props;
    const { activeListUsers } = this.state;

    return (
      <Container>
        <Content>
          <HeaderPage>
            <PageTitle>
              contatos
            </PageTitle>

            <ButtonsWrapper>
              <button onClick={activeListUsers ? this.closeListUsers : this.openListUsers}>
                {activeListUsers ? "Esconder lista de usuários" : "Mostrar lista de usuários"}
              </button>
            </ButtonsWrapper>
          </HeaderPage>

          <List loading={contacts.loading}>
            {contacts.list && (
              <ul>
                {contacts.list.map(item => (
                  <li key={item.id}>
                    <div>
                        <p>
                          Nome:
                          <strong>{item.name ? item.name : item.contact.name}</strong>
                        </p>
                        <p>
                          Email:
                          <strong>{item.email ? item.email : item.contact.email}</strong>
                        </p>
                    </div>
                    <div>
                      <ButtonsWrapper>
                        <button onClick={this.props.deleteContact.bind(null, item.id)}>
                          excluir
                        </button>
                      </ButtonsWrapper>
                    </div>
                  </li>
                ))}

                {contacts.list.length === 0 && (
                  <li>Nenhum contato encontrado.</li>
                )}
              </ul>
            )}
          </List>

          {activeListUsers && <ListUsers />}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({ contacts });

const mapDispatchToProps = dispatch => bindActionCreators({
  getContacts: ContactsActions.getContacts,
  deleteContact: ContactsActions.deleteContact,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
