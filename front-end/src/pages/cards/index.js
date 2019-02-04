import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CardsActions } from '../../store/ducks/cards';

import { Container } from './styles';
import {
  Content,
  PageTitle,
  ButtonsWrapper,
  HeaderPage,
  List,
  Tooltip
} from '../../styles/components';

import ModalCard from '../../components/ModalCard';

class Cards extends Component {

  static propTypes = {
    cards: PropTypes.shape({
      list: PropTypes.array,
      loading: PropTypes.bool,
    }).isRequired,

    getCards: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
  };

  state = { modalCard: null };

  componentDidMount() {
    const { cards } = this.props;

    if (!cards.list) {
      this.props.getCards();
    }
  }

  closeModal = () => {
    this.setState({ modalCard: null });
  }

  openModal = (value = true, event) => {
    if (event) {
      event.preventDefault();
    }

    this.setState({ modalCard: value });
  }

  deleteCard = (id, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.props.deleteCard(id);
  }

  render() {

    const { cards } = this.props;
    const { modalCard } = this.state;

    return (
      <Container>
        <Content>
          <HeaderPage>
            <PageTitle>Cartões</PageTitle>

            <ButtonsWrapper>
              <button onClick={this.openModal.bind(null, true)}>Adicionar Cartão</button>
            </ButtonsWrapper>
          </HeaderPage>

          <List loading={cards.loading}>
            {cards.list && (
              <ul>
                {cards.list.map(item => (
                  <li key={item.id} onClick={this.openModal.bind(null, item.id)}>
                    <div>
                        <p>
                          Número:
                          <strong>{item.number}</strong>
                        </p>
                        <p>
                          Titular:
                          <strong>{item.holder}</strong>
                        </p>
                        <p>
                          Vencimento:
                          <strong>{item.expiration}</strong>
                        </p>
                        <p>
                          Cvv:
                          <strong>{item.cvv}</strong>
                        </p>
                    </div>
                    <div>
                      <ButtonsWrapper>
                        <button onClick={this.deleteCard.bind(null, item.id)}>excluir</button>
                      </ButtonsWrapper>
                    </div>

                    <Tooltip>
                      Clique para editar.
                    </Tooltip>
                  </li>
                ))}

                {cards.list.length === 0 && (
                  <li onClick={this.openModal.bind(null, true)}>Nenhum cartão encontrado.</li>
                )}
              </ul>
            )}
          </List>
        </Content>

        {cards.list &&
          <ModalCard
            isOpen={modalCard}
            onClose={this.closeModal}
            card={cards.list.find(card => card.id === modalCard) || null}
          />
        }
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCards: CardsActions.getCards,
  deleteCard: CardsActions.deleteCard
}, dispatch);

const mapStateToProps = ({ cards }) => ({ cards });

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
