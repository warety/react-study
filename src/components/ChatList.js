import React from 'react';
import PropTypes from 'prop-types';
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
        active={Boolean(activeChat && activeChat._id === chat._id)}
        chatId={chat._id}
        {...chat}
      />
    ))}
  </List>
);

ChatList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeChat: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
  disabled: PropTypes.bool.isRequired,
};

ChatList.defaultProps = {
  activeChat: null,
};

export default withStyles(styles)(ChatList);
