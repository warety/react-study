import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChatListItem from './ChatsListItem';

const styles = () => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflow: 'scroll',
  },
});

const ChatList = ({
  classes, chats, activeChat, disabled,
}) => (
  <List className={classes.chatsList}>
    {chats.map(chat => (
      <ChatListItem
        disabled={disabled}
        key={chat._id}
        active={activeChat && activeChat._id === chat._id}
        title={chat.title}
        chatId={chat._id}
        {...chat}
      />
    ))}
  </List>
);

export default withStyles(styles)(ChatList);
