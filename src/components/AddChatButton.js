import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: '55px',
    right: '10px',
  },
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


class AddChat extends React.Component {
  state = {
    modalOpen: false,
    title: '',
  }

  handleModalClick = () => this.setState({ modalOpen: !this.state.modalOpen });

  handleTitleChange = (event) => this.setState({title: event.target.value});

  handleCreateClick = (event) => {
    event.preventDefault();

    const { title } = this.state;

    this.props.onClick(title);
    this.handleModalClick();
    this.setState({title: ''});
  }

  render() {
    const { classes } = this.props;
    const { modalOpen, title } = this.state;
    return (
      <div>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.button}
          onClick={this.handleModalClick}
        >
          <AddIcon />
        </Button>
        <Modal
          open={modalOpen}
          className={classes.modalWrapper}
          onClose={this.handleModalClick}
        >
          <Paper className={classes.modal}>
            <Typography variant="title" id="modal-title">
              Create new chat
            </Typography>
            <TextField
              required
              fullWidth
              label="New chat"
              placeholder="Type the title..."
              type="text"
              margin="normal"
              autoComplete="new-chat"
              value={title}
              onChange={this.handleTitleChange}
            />
            <Button
              color="primary"
              onClick={this.handleCreateClick}
            >
              Create
            </Button>
          </Paper>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(AddChat);
