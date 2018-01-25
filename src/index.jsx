import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {AppContainer} from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', async () => {
		const App = await import ('./App');
		render(App.default)
	})
}
