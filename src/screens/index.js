import React from 'react';

import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import PrivateRoute from '../redux/auth/containers/PrivateRouter';

import ChatPage from '../redux/chats/containers/ChatPage';
import WelcomePage from '../redux/auth/containers/WelcomePage';
import history from '../utils/history';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/(welcome)?" component={WelcomePage} />
      <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
