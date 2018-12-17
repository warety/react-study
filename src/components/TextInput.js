import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

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

const TextInput = ({ classes, placeholder }) => (
  <div className={classes.messageInputWrapper}>
    <Paper className={classes.messageInput} elevation={6}>
      <Input fullWidth placeholder={placeholder} />
    </Paper>
  </div>
)

export default withStyles(styles)(TextInput)
