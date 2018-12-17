import React from 'react';
import { Button, TextField } from '@material-ui/core';


class LoginForm extends React.Component {
  state = {
    login: '',
    password: '',
  }

  handleUsername = (e) => this.setState({...this.state, login: e.target.value});

  handlePassword = (e) => this.setState({...this.state, password: e.target.value});

  handleSubmit = () => alert(`Hello, ${this.state.login}`);

  render() {
    const { login, password } = this.state;
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
        <Button
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
        >
        Login
        </Button>
      </form>
    )
  }
}

export default LoginForm
