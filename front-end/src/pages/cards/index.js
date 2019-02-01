import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CardsActions } from '../../store/ducks/cards';

import { Container, ListCard, HeaderCard } from './styles';
import { Content, PageTitle, ButtonsWrapper } from '../../styles/components';

import ModalCart from '../../components/ModalCart';

class Cards extends Component {

  state = { modalCart: null };

  componentDidMount() {
    const { cards } = this.props;
    if (!cards.list) {
      this.props.getCards();
    }
  }

  closeModal = () => {
    this.setState({ modalCart: null });
  }

  openModal = (value = true) => {
    this.setState({ modalCart: value });
  }

  render() {

    const { cards } = this.props;
    const { modalCart } = this.state;

    console.log('cards: ', cards);

    return (
      <Container>
        <Content>
          <HeaderCard>
            <PageTitle>Cartões</PageTitle>

            <ButtonsWrapper>
              <button onClick={this.openModal}>Adicionar Cartão</button>
            </ButtonsWrapper>
          </HeaderCard>

          <ListCard loading={cards.loading}>
            {cards.list && (
              <ul>
                {cards.list.map(item => (
                  <li key={item.id}>
                    <div>
                        <p>
                          <strong>Número:</strong>
                          {item.number}
                        </p>
                        <p>
                          <strong>Titular:</strong>
                          {item.holder}
                        </p>
                        <p>
                          <strong>vencimento:</strong>
                          {item.holder}
                        </p>
                        <p>
                          <strong>cvv:</strong>
                          {item.cvv}
                        </p>
                    </div>
                    <div>
                      <ButtonsWrapper>
                        <button>excluir</button>
                      </ButtonsWrapper>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </ListCard>
        </Content>

        <ModalCart
          isOpen={modalCart}
          onClose={this.closeModal}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCards: CardsActions.getCards
}, dispatch);

const mapStateToProps = ({ cards }) => ({ cards });

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
