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

  async componentDidMount() {
    const favLocalStorage = await getFavoriteSongs();

    this.setState({
      loading: true,
      listFavSongs: favLocalStorage,
    });
  }

  handleFav = async (id) => {
    const {
      listFavSongs
    } = this.state;
    this.setState({ loading: false });

    const favSong = listFavSongs.find((song) => song.trackId === trackId);
    await removeSong(favSong);
    const favLocalStorage = await getFavoriteSongs();
    this.setState({
      loading: true,
      listFavSongs: favLocalStorage,
    });
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
