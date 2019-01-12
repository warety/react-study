import React from 'react';

import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import PrivateRoute from '../redux/auth/containers/PrivateRouter';

import ChatPage from '../redux/chats/containers/ChatPage';
import WelcomePage from '../redux/auth/containers/WelcomePage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/(welcome)?" component={WelcomePage} />
      <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
