import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const styles = theme => ({
  appBar: {
    position: 'fixed',
    width: `100%`,
  },
  paper: {
    marginTop: 64 + theme.spacing.unit * 3,
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
})

class WelcomePage extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              WelcomePage
          </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify='center'>
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar position="static" color="inherit">
                <Tabs value={value} onChange={this.handleChange} fullWidth>
                  <Tab label="LOGIN" />
                  <Tab label="SIGN UP" />
                </Tabs>
                <div className={classes.tabContent}>
                  {value === 0 && <LoginForm />}
                  {value === 1 && <SignUpForm />}
                </div>
              </AppBar>
            </Paper>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(WelcomePage)