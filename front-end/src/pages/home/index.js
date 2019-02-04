import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Container, Amount } from './styles';
import { Content } from '../../styles/components';

import formatMoney from '../../helpers/formatMoney';

const Home = ({ amount }) => (
	<Container>
		<Content>
			<Amount>
				Saldo atual da conta: <strong> R$ {amount}</strong>
			</Amount>
		</Content>
	</Container>
);

Home.propTypes = { amount: PropTypes.string.isRequired };

const mapStateToProps = ({ user }) => ({
  amount: user.amount ? formatMoney(user.amount) : formatMoney(0)
});

export default connect(mapStateToProps)(Home);
