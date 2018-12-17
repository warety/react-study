import React from 'react';
import { Button, TextField } from '@material-ui/core';

class SignUpForm extends React.Component {
  state = {
    login: '',
    password: '',
    repeatPassword: '',
  }

  handleUsername = (e) => this.setState({...this.state, login: e.target.value});

  handlePassword = (e) => this.setState({...this.state, password: e.target.value});

  handleRepeatPassword = (e) => this.setState({...this.state, repeatPassword: e.target.value})

  handleSubmit = () => alert(123);

  render() {
    const { login, password, repeatPassword } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          type="text"
          margin="normal"
          value={login}
          onChange={this.handleUsername}
        />
        <TextField
          required
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={this.handlePassword}
        />
        <TextField
          required
          fullWidth
          label="Repeat password"
          type="password"
          margin="normal"
          value={repeatPassword}
          onChange={this.handleRepeatPassword}
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
        >
        SIGN UP
        </Button>
      </form>
    )
  }
}

export default SignUpForm
