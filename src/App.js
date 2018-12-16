import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Sidebar from './components/Sidebar'
import ChatHeader from './components/ChatHeader'
import Chat from './components/Chat';

import { chats, messages } from './mock_data';


const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

class App extends React.Component {

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ChatHeader />
        <Sidebar chats={chats} />
        <Chat messages={messages} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
