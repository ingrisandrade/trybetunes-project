import React, { Component } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';


class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <h1>Favorites</h1>
        <Header />
      </div>
    );
  }
}

export default Favorites;
