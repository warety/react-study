import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

class SignUpForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    login: '',
    password: '',
    repeatPassword: '',
  };

  handleInput = (event) => {
    event.persist();
    const { name, value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, password } = this.state;

    this.props.onSubmit(login, password);
  };

  render() {
    const { login, password, repeatPassword } = this.state;
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
          type="password"
          name="password"
          margin="normal"
          value={password}
          onChange={this.handleInput}
        />
        <TextField
          required
          fullWidth
          label="Repeat password"
          type="password"
          name="repeatPassword"
          margin="normal"
          value={repeatPassword}
          onChange={this.handleInput}
        />
        <Button fullWidth variant="contained" type="submit" color="primary">
          SIGN UP
        </Button>
      </form>
    );
  }
}

export default SignUpForm;
