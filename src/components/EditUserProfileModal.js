import React from 'react';
import PropTypes from 'prop-types';
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
    padding: theme.spacing.unit * 3,
  },
});

const EditUserModal = ({
  open, classes, editUser, closeModal, changeField, user,
}) => {
  const { username, firstName, lastName } = user;
  return (
    <Modal open={open} className={classes.modalWrapper} onClose={closeModal}>
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
  );
};

EditUserModal.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  open: PropTypes.bool.isRequired,
  editUser: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(EditUserModal);
