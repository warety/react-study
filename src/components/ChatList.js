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

const ChatList = ({ classes, chats, activeChat, disabled }) => {
  return (
    <List className={classes.chatsList}>
      {chats.map((chat, index) => (
        <ChatListItem
          disabled={disabled}
          key={index}
          active={activeChat && activeChat._id === chat._id}
          title={chat.title}
          chatId={chat._id}
          {...chat} />
      ))}
    </List>
  )
}

export default withStyles(styles)(ChatList)
