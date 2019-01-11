import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles/index';

const styles = theme => ({
  chatMenuContainer: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  chatMenuTitle: {
    color: '#fff',
    marginLeft: theme.spacing.unit * 2,
  },
});

class ChatMenu extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLeaveClick = () => {
    this.handleClose();
    this.props.onLeaveClick();
  }

  handleDeleteClick = () => {
    this.handleClose();
    this.props.onDeleteClick();
  }

  render() {
    const { activeUser, disabled } = this.props;
    const { anchorEl } = this.state;

    if (!activeUser.isChatMember) {
      return null;
    }

    return (
      <>
        <IconButton
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          disabled={disabled}
          onClick={this.handleClick}
        >
          <MoreIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {activeUser.isMember && <MenuItem onClick={this.handleLeaveClick}>Leave</MenuItem>}
          {activeUser.isCreator && <MenuItem onClick={this.handleDeleteClick}>Delete</MenuItem>}
        </Menu>
      </>
    );
  }
}

export default withStyles(styles)(ChatMenu);
