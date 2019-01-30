import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from "./styles/global";

import Header from './components/Header';

import Routes from './routes/index';

const App = () => (
	<BrowserRouter>
		<>
			<GlobalStyle />
			<div className="App">
				<Header />
				<Routes />
			</div>
		</>
	</BrowserRouter>
);

export default App;
