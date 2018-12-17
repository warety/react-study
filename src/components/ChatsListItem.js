import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from './Avatar';


const ChatListItem = ({title}) => (
  <ListItem button>
    <Avatar colorFrom={title}>
      {title}
    </Avatar>
    <ListItemText primary={title}/>
  </ListItem>
)

export default ChatListItem
