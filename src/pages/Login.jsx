import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        Login
        <label htmlFor="input-name-login">
          <input
            type="text"
            name="name"
            id="input-name-login"
            data-testid="login-name-input"
          />
        </label>
      </div>
    );
  }
}

export default Login;
