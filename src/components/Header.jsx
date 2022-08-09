import React, { Component } from 'react';
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
          <p data-testid="header-user-name">{ inputUser }</p>
        </header>
      </div>
    );
  }
}

export default Header;
