import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ChatMessage from './ChatMessage';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  paper: {
    padding: theme.spacing.unit * 3
  }
});

class ChatMessageList extends React.Component {
  render() {
    const { classes, messages, activeUser } = this.props;

    return messages && messages.length ? (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            activeUser={activeUser}
            {...message}
          />
        ))}
      </div>
    ) : (
      <Typography variant="display1">
        There is no messages yet...
      </Typography>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
