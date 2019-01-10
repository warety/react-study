import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import PrivateRoute from '../redux/auth/containers/PrivateRouter';

import ChatPage from '../redux/chats/containers/ChatPage';
import WelcomePage from '../redux/auth/containers/WelcomePage';


const store = configureStore()
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePage} />
        <PrivateRoute path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
)

export default App;
