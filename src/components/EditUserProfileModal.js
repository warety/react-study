import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles/index';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '30%',
    minWidth: '300px',
    padding: theme.spacing.unit * 3
  }
});


class EditUserModal extends React.Component {
  state = {
    username: '',
    lastName: '',
    firstName: '',
  }

  render() {
    const { open, classes, editUser, closeModal, changeField, user } = this.props;
    const { username, firstName, lastName } = user;
    return (
      <Modal
        open={open}
        className={classes.modalWrapper}
        onClose={closeModal}
      >
        <Paper className={classes.modal}>
            <Typography variant="title" id="modal-title">
              Edit profile
            </Typography>
            <TextField
              required
              fullWidth
              name="username"
              label="Username"
              placeholder="Enter you username..."
              type="text"
              margin="normal"
              value={username}
              onChange={changeField}
            />
            <TextField
              fullWidth
              name="firstName"
              label="First name"
              placeholder="Enter you first name..."
              type="text"
              margin="normal"
              value={firstName}
              onChange={changeField}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last name"
              placeholder="Enter you last name..."
              type="text"
              margin="normal"
              value={lastName}
              onChange={changeField}
            />
            <Button color="primary" onClick={editUser}>
              Save
            </Button>
            <Button onClick={closeModal}>Close</Button>
          </Paper>
      </Modal>
    )
  }
}

export default withStyles(styles)(EditUserModal)
