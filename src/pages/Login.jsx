import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  state = {
    name: '',
    btnDisabled: true,
    loading: false,
  }

  inputChange = ({ name, value }) => {
    this.setState({
      [name]: value,
    }, () => {
      this.onSaveButtonClick();
    });
  };

  onSaveButtonClick = () => {
    const { name } = this.state;
    const caracterMin = 3;
    const caracterValid = name.length >= caracterMin;
    this.setState({
      btnDisabled: !caracterValid,
    });
  }

  onSaveName = async () => {
    const { name } = this.state;
    this.setState({ loading: true }, async () => {
      await createUser({ name });
      this.setState({ loading: false }, () => {
        const { history } = this.props;
        history.push('/search');
      });
    });
  }

  render() {
    const {
      name,
      btnDisabled,
      loading,
    } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="page-login">
        Login
        <label htmlFor="input-name-login">
          <input
            type="text"
            name="name"
            value={ name }
            id="input-name-login"
            data-testid="login-name-input"
            placeholder="Digite seu nome"
            onChange={ ({ target }) => this.inputChange(target) }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ btnDisabled }
          onClick={ this.onSaveName }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
