import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EditUserProfileModal from './EditUserProfileModal';

class UserMenu extends React.Component {
  static propTypes = {
    activeUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  state = {
    anchorEl: null,
    modalOpen: false,
    editProfileForm: {
      username: '',
      firstName: '',
      lastName: '',
    },
  };

  componentWillReceiveProps(nextProps) {
    const { username, firstName, lastName } = nextProps.activeUser;
    this.setState(prevState => ({
      ...prevState,
      editProfileForm: {
        username,
        firstName,
        lastName,
      },
    }));
  }

  openMenu = event => this.setState({ anchorEl: event.currentTarget });

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  handleToggleModal = () => {
    const { modalOpen } = this.state;
    this.setState(prevState => ({ ...prevState, modalOpen: !modalOpen }));
    this.closeMenu();
  };

  onInputChange = (event) => {
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      editProfileForm: {
        ...prevState.editProfileForm,
        [event.target.name]: event.target.value,
      },
    }));
  };

  updateProfile = () => {
    const { editUser } = this.props;
    const { editProfileForm } = this.state;
    editUser({ ...editProfileForm }).then(() => {
      this.handleToggleModal();
    });
  };

  handleLogout = () => {
    const { logout } = this.props;
    logout();
    this.closeMenu();
  };

  render() {
    const {
      anchorEl, modalOpen, editProfileForm, disabled,
    } = this.state;
    return (
      <>
        <IconButton
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.openMenu}
          disabled={disabled}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.closeMenu}
        >
          <MenuItem onClick={this.handleToggleModal}>Edit Profile</MenuItem>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
        <EditUserProfileModal
          open={modalOpen}
          closeModal={this.handleToggleModal}
          editUser={this.updateProfile}
          changeField={this.onInputChange}
          user={editProfileForm}
        />
      </>
    );
  }
}

export default UserMenu;
