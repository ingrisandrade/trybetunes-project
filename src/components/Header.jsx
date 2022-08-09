import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    inputUser: '',
    loading: true,
  }

  async componentDidMount() {
    this.logName();
  }

  logName = () => {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({ loading: false, inputUser: user.name });
    });
  }

  render() {
    const {
      inputUser,
      loading,
    } = this.state;

    if (loading) return <Loading />;

    return (
      <div>
        <header data-testid="header-component">
          <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
          <p data-testid="header-user-name">{ inputUser }</p>
        </header>
      </div>
    );
  }
}

export default Header;
