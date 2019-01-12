import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

import TextField from '@material-ui/core/TextField';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import ChatList from './ChatList';
import AddChatButton from './AddChatButton';

const styles = theme => ({
  drawer: {
    width: 320,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 320,
  },
  bottomNav: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 56, // + bottom navigation
  },
});

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired,
    }).isRequired,
    createChat: PropTypes.func.isRequired,
    isConnected: PropTypes.bool.isRequired,
  };

  state = {
    searchValue: '',
    activeTab: 0,
  };

  handleTabChange = (event, value) => {
    this.setState({
      activeTab: value,
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  filterChats = (chats) => {
    const { searchValue } = this.state;

    return chats
      .filter(chat => chat.title.toLowerCase().includes(searchValue.toLowerCase()))
      .sort((one, two) => (one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1));
  };

  render() {
    const {
      classes, chats, createChat, isConnected,
    } = this.props;
    const { activeTab, searchValue } = this.state;
    return (
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
            onChange={this.handleSearchChange}
            value={searchValue}
          />
        </div>
        <Divider />
        <ChatList
          disabled={!isConnected}
          chats={this.filterChats(activeTab === 0 ? chats.my : chats.all)}
          activeChat={chats.active}
        />
        <div className={classes.bottomNavigationWrapper}>
          <AddChatButton onClick={createChat} disabled={!isConnected} />
          <BottomNavigation value={activeTab} onChange={this.handleTabChange} showLabels>
            <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
