import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Avatar from '@material-ui/core/Avatar';
import classNames from "classnames";

import titleInitials from '../utils/title-initials';


const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  },
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 320px)`,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff'
  },
});


const Chat = ({ classes, messages}) => (
  <main className={classes.chatLayout}>
          <div className={classes.messagesWrapper}>
            {messages && messages.map((message, index) => {
              const isMessageFromMe = message.sender === 'me';

              const userAvatar = (
                <Avatar>
                  {titleInitials(message.sender)}
                </Avatar>
              );

              return (
                // <div className={classNames(classes.messageWrapper, isMessageFromMe && classes.messageWrappperFromMe)}>
                <div key={index} className={classNames(classes.messageWrapper, isMessageFromMe && classes.messageWrappperFromMe)}>
                  {!isMessageFromMe && userAvatar}
                  <Paper className={[
                    classes.message,
                    isMessageFromMe ? classes.messageFromMe : ''
                  ].join(' ')}>
                    <Typography variant="caption">
                      {message.sender}
                    </Typography>
                    <Typography variant="body1">
                      {message.content}
                    </Typography>
                  </Paper>
                  {isMessageFromMe && userAvatar}
                </div>
              );
            })}
          </div>
          <div className={classes.messageInputWrapper}>
            <Paper className={classes.messageInput} elevation={6}>
              <Input fullWidth placeholder="Type your message…"/>
            </Paper>
          </div>
        </main>
)

export default withStyles(styles)(Chat);
