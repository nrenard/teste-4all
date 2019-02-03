import React, { Component } from 'react';
import formatMoney from '../../helpers/formatMoney';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TransfersActions } from '../../store/ducks/transfers';
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

  state = { modalAddTransfer: false };

  componentDidMount() {
    if (!this.props.transfers.list) {
      this.props.getTransfers();
    }
  }

  openModalAddTransfer = () => {
    this.setState({ modalAddTransfer: true });
  }

  cloaseModalAddTransfer = () => {
    this.setState({ modalAddTransfer: false });
  }

  render () {

    const { transfers } = this.props;

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
                          Quem recebeu:
                          <strong>{item.receiver.email}</strong>
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

const mapStateToProps = ({ transfers }) => ({ transfers });

const mapDispatchToProps = dispatch => bindActionCreators({
  getTransfers: TransfersActions.getTransfers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
