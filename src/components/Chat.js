import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ChatMessageList from './ChatMessageList';
import TextInput from './TextInput';

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  },
});


const Chat = ({ classes, messages }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} />
    <TextInput placeholder={'Type your message…'} />
  </main>
)

export default withStyles(styles)(Chat);
