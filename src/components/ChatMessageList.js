import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ChatMessage from './ChatMessage';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
})

const ChatMessageList = ({ classes, messages }) => (
  <div className={classes.messagesWrapper}>
    {messages && messages.map((message, index) => {
      return <ChatMessage key={index} sender={message.sender} content={message.content} />
    })}
  </div>
)

export default withStyles(styles)(ChatMessageList);
