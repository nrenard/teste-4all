import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CardsActions } from '../../store/ducks/cards';

import { Container, ListCard, HeaderList, ColumnList } from './styles';
import { Content, PageTitle } from '../../styles/components';

class Cards extends Component {

  componentDidMount() {
    this.props.getCards();
  }

  render() {

    console.log('this.props: ', this.props);

    return (
      <Container>
        <Content>
          <PageTitle>Cartões</PageTitle>
    
          <ListCard>
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
            <ul>
              <li>
                <div>
                  <ColumnList width={160}>
                    <p>1234 4321 7894 6542</p>
                  </ColumnList>
                  <ColumnList width={150}>
                    <p>Nicolas Y Z Renard</p>
                  </ColumnList>
                  <ColumnList width={90}>
                    <p>02/21</p>
                  </ColumnList>
                  <ColumnList width={30}>
                    <p>123</p>
                  </ColumnList>
                </div>
                <div>
                  <p className="actions">excluir</p>
                </div>
              </li>
              <li>a</li>
            </ul>
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
