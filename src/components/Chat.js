import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import ChatMessageList from './ChatMessageList';
import TextInput from './TextInput';

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
});




const Chat = ({ classes, messages, activeUser, activeChat, joinChat, sendMessage, isConnected }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} activeUser={activeUser} />
    {activeChat && <TextInput
      disabled={!isConnected}
      sendMessage={sendMessage}
      showJoinButton={!activeUser.isChatMember}
      onJoinButtonClick={() => joinChat(activeChat._id)}
      activeUser={activeUser}
      placeholder={'Type your message…'}
    />}
  </main>
)

export default withRouter(withStyles(styles)(Chat));
