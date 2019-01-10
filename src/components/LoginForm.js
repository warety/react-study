import React from 'react';
import { Button, TextField } from '@material-ui/core';


class LoginForm extends React.Component {
  state = {
    login: '',
    password: '',
  }


  handleInput = (event) => {
    event.persist();
    const { name, value } = event.target

    this.setState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, password } = this.state;

    this.props.onSubmit(login, password);
  }

  render() {
    const { login, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          type="text"
          name="login"
          margin="normal"
          value={login}
          onChange={this.handleInput}
        />
        <TextField
          required
          fullWidth
          label="Password"
          name="password"
          type="password"
          margin="normal"
          value={password}
          onChange={this.handleInput}
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
