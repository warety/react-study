import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import configureStore from './redux/store/index';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('root');
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , rootEl);



if (module.hot) {
  module.hot.accept('./screens', () => {
    ReactDOM.render(<Provider store={store}>
      <App />
    </Provider>, rootEl);
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
