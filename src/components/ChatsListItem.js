import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

const styles = theme => ({
  activeItem: {
    backgroundColor: theme.palette.grey[200],
  }
});

const ChatListItem = ({ title, chatId, active, classes, disabled, createdAt }) => (
  <ListItem
    button
    component={Link}
    to={`/chat/${chatId}`}
    className={active ? classes.activeItem : ''}
    disabled={disabled}
  >
    <Avatar colorFrom={title}>
      {title}
    </Avatar>
    <ListItemText primary={title} secondary={moment(createdAt).fromNow()}/>
  </ListItem>
)

export default withStyles(styles)(ChatListItem)
