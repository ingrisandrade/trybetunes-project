import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Profile extends Component {
  state = {
    userInfo: [],
    loading: false,
  }

  componentDidMount() {
    this.userInfoAPI();
  }

  userInfoAPI = async () => {
    this.setState({ loading: true });

    const getInfoUser = await getUser();
    this.setState({ user: [getInfoUser], loading: false });
  }

  render() {
    const {
      userInfo,
      loading,
    } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />
        <h1>Profile</h1>
        {
          loading ? <Loading /> : (user.map((info) => (
            <div key={ info.name }>
              <ul>
                <li>
                  <img
                    src={ info.image }
                    alt={ info.name }
                    data-testid="profile-image"
                  />
                </li>
                <li>{ info.name }</li>
                <li>{ info.email }</li>
                <li>{ info.description }</li>
              </ul>
            </div>
          )))
        }
      </div>
    );
  }
}

export default Profile;
