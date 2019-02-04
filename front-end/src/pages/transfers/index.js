import React, { Component } from 'react';
import PropTypes from 'prop-types';

import formatMoney from '../../helpers/formatMoney';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TransfersActions } from '../../store/ducks/transfers';
import { Creators as UserActions } from '../../store/ducks/user';

import { Container } from './styles';
import {
  Content,
  PageTitle,
  ButtonsWrapper,
  HeaderPage,
  List
} from '../../styles/components';

import ModalTranfer from '../../components/ModalTransfer';

class Transfers extends Component {

  static propTypes = {
    transfers: PropTypes.shape({
      list: PropTypes.array,
      loading: PropTypes.bool,
    }).isRequired,

    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,

    getTransfers: PropTypes.func.isRequired,
  };

  state = { modalAddTransfer: false };

  componentDidMount() {
    if (!this.props.transfers.list) {
      this.props.getTransfers();
    }
    if (!this.props.user.name || !this.props.user.email) {
      this.props.getUser();
    }
  }

  openModalAddTransfer = () => {
    this.setState({ modalAddTransfer: true });
  }

  cloaseModalAddTransfer = () => {
    this.setState({ modalAddTransfer: false });
  }

  render () {

    const { transfers, user } = this.props;

    return (
      <Container>
        <Content>
          <HeaderPage>
            <PageTitle>
              Transferências
            </PageTitle>

            <ButtonsWrapper>
              <button onClick={this.openModalAddTransfer}>Transferir</button>
            </ButtonsWrapper>
          </HeaderPage>

          <List loading={transfers.loading}>
            {transfers.list && (
              <ul>
                {transfers.list.map(item => {
                  const date = new Date(item.created_at).toLocaleDateString();
                  return (
                    <li key={item.id}>
                      <div>
                        <p>
                          Data:
                          <strong>{date}</strong>
                        </p>
                        <p>
                          Valor:
                          <strong>R$ {formatMoney(item.value)}</strong>
                        </p>
                        <p>
                          Enviado por:
                          <strong>{item.user.id === user.id ? "Eu" : item.user.email}</strong>
                        </p>
                        <p>
                          Recebido por:
                          <strong>{item.receiver.id === user.id ? "Eu" : item.receiver.email}</strong>
                        </p>
                    </div>
                    </li>
                  )
                })}

                {transfers.list.length === 0 && (
                  <li onClick={this.openModalAddTransfer}>Nenhuma transferência encontrada.</li>
                )}
              </ul>
            )}
          </List>

        </Content>

        <ModalTranfer isOpen={this.state.modalAddTransfer} onClose={this.cloaseModalAddTransfer} />
      </Container>
    );
  }
}

const mapStateToProps = ({ transfers, user }) => ({ transfers, user });

const mapDispatchToProps = dispatch => bindActionCreators({
  getTransfers: TransfersActions.getTransfers,
  getUser: UserActions.getUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
