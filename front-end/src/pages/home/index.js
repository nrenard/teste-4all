import React from 'react';

import { connect } from 'react-redux';

import { Container, Amount } from './styles';
import { Content } from '../../styles/components';

import formatMoney from '../../helpers/formatMoney';

const Home = ({ amout }) => (
	<Container>
		<Content>
			<Amount>
				Saldo atual da conta: <strong> R$ {amout}</strong>
			</Amount>
		</Content>
	</Container>
);

const mapStateToProps = ({ user }) => ({ amout: user.amount ? formatMoney(user.amount) : formatMoney(0) });

export default connect(mapStateToProps)(Home);
