import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChatListItem from './ChatsListItem';


const styles = theme => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflow: 'scroll',
  },
})

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatsList}>
    {chats.map((chat, index) => (
      <ChatListItem key={index} title={chat.title} />
    ))}
  </List>
)

export default withStyles(styles)(ChatList)
