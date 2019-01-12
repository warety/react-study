import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ChatMessage from './ChatMessage';

const styles = theme => ({
  messagesWrapper: {
    height: '100%',
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    paddingBottom: theme.spacing.unit * 14,
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
});

class ChatMessageList extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    if (this.messagesWrapper) {
      window.scrollTo({
        top: this.messagesWrapper.offsetTop,
      });
    }
  }

  render() {
    const { classes, messages, activeUser } = this.props;

    return messages && messages.length ? (
      <div
        className={classes.messagesWrapper}
      >
        {messages.map(message => (
          <ChatMessage key={message._id} activeUser={activeUser} {...message} />
        ))}
        <div ref={(wrapper) => { this.messagesWrapper = wrapper; }} />
      </div>
    ) : (
      <Typography variant="display1">There is no messages yet...</Typography>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
