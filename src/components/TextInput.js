import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 420px)`,
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
})

class TextInput extends React.Component {
  state = {
    value: '',
  }

  handleValueChange = (event) => this.setState({ value: event.target.value });

  handleKeyPress = (event) => {
    const { value } = this.state;

    if (event.key === 'Enter' && value) {
      this.props.sendMessage(value);
      this.setState({ value: '' });
    }
  }


  render() {
    const { classes, placeholder, showJoinButton, onJoinButtonClick, disabled } = this.props;
    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
          {showJoinButton ? (
            <Button
              disabled={disabled}
              fullWidth
              variant="raised"
              color="primary"
              onClick={onJoinButtonClick}
            >
              Join
            </Button>
          ) : (
              <Input
                disabled={disabled}
                fullWidth
                placeholder={placeholder}
                value={this.state.value}
                onChange={this.handleValueChange}
                onKeyPress={this.handleKeyPress}
              />
            )}
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(TextInput)
