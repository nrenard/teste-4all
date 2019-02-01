import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CardsActions } from '../../store/ducks/cards';

import { Container, ListCard, HeaderList, ColumnList } from './styles';
import { Content, PageTitle } from '../../styles/components';

class Cards extends Component {

  componentDidMount() {
    const { cards } = this.props;
    if (!cards.list) {
      this.props.getCards();
    }
  }

  render() {

    const { cards } = this.props;

    console.log('cards: ', cards);

    return (
      <Container>
        <Content>
          <PageTitle>Cartões</PageTitle>
    
          <ListCard loading={cards.loading}>
            <HeaderList>
              <div>
                <ColumnList width={160}>
                  <p>Número</p>
                </ColumnList>
                <ColumnList width={150}>
                  <p>Titular</p>
                </ColumnList>
                <ColumnList width={90}>
                  <p>vencimento</p>
                </ColumnList>
                <ColumnList width={30}>
                  <p>CCV</p>
                </ColumnList>
              </div>
              <div>
                <p className="actions">ações</p>
              </div>
            </HeaderList>
            {cards.list && (
              <ul>
                {cards.list.map(item => (
                  <li key={item.id}>
                    <div>
                      <ColumnList width={160}>
                        <p>{item.number}</p>
                      </ColumnList>
                      <ColumnList width={150}>
                        <p>{item.holder}</p>
                      </ColumnList>
                      <ColumnList width={90}>
                        <p>{item.expiration}</p>
                      </ColumnList>
                      <ColumnList width={30}>
                        <p>{item.cvv}</p>
                      </ColumnList>
                    </div>
                    <div>
                      <p className="actions">excluir</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </ListCard>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCards: CardsActions.getCards
}, dispatch);

const mapStateToProps = ({ cards }) => ({ cards });

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
