import React from 'react';

import { GlobalStyle } from "./styles/global";

import Header from './components/Header';

import Routes from './routes/index';

const App = () => (
	<>
		<GlobalStyle />
		<div className="App">
			<Header />
			<Routes />
		</div>
	</>
);

export default App;
