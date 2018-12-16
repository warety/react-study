import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import List from '@material-ui/core/List';

import Fab from '@material-ui/core/Fab';

import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import AddIcon from '@material-ui/icons/Add';

import titleInitials from '../utils/title-initials';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  bottomNavigation : {
    position: 'absolute',
    bottom: 0,
    height: '56px',
    width: '100%',
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflow: 'scroll',
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 56, // + bottom navigation
  },
});

const Sidebar = ({classes, chats}) => (
  <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <TextField
              fullWidth
              margin="normal"
              placeholder="Search chats..."
            />
          </div>
          <Divider />
          <List className={classes.chatsList}>
            {chats.map((chat, index) => (
              <ListItem key={index} button>
                <Avatar>{titleInitials(chat.title)}</Avatar>
                <ListItemText primary={chat.title}/>
              </ListItem>
            ))}
          </List>
          <div>
            <Fab color="primary" aria-label="Add" className={classes.newChatButton}>
              <AddIcon />
            </Fab>
            <BottomNavigation showLabels  className={classes.bottomNavigation}>
              <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>
          </div>
        </Drawer>
);

export default withStyles(styles)(Sidebar);
