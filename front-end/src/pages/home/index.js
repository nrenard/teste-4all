import React from 'react';

import { connect } from 'react-redux';

import { Container, Amount, ButtonsWrapper } from './styles';
import { Content } from '../../styles/components';

const Home = ({ amout }) => (
	<Container>
		<Content>
			<Amount>
				Saldo atual da conta: <strong> {amout}</strong>
				<ButtonsWrapper>
					<button>Adicionar saldo</button>
				</ButtonsWrapper>
			</Amount>
		</Content>
	</Container>
);

const mapStateToProps = ({ user }) => ({ amout: user.amount ? user.amount : 0 });

export default connect(mapStateToProps)(Home);
