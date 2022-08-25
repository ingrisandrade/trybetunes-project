import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class Favorites extends Component {
  state = {
    loading: false,
    listFavSongs: [],
  }
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
