import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from "./styles/global";

import Header from './components/Header';
import { Provider } from 'react-redux';

import Routes from './routes/index';
import store from './store';

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<>
				<GlobalStyle />
				<div className="App">
					<Header />
					<Routes />
				</div>
			</>
		</BrowserRouter>
	</Provider>
);

export default App;
