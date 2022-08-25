import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class Favorites extends Component {
  state = {
    loading: false,
    listFavSongs: [],
  }

  componentDidMount() {
    this.favSongs();
  }

  favSongs = async () => {
    this.setState({
      loading: true,
    });
    const favLocalStorage = await getFavoriteSongs();

    this.setState({ listFavSongs: favLocalStorage });
    this.setState({ loading: false });
  }

  render() {
    const {
      loading,
      listFavSongs,
    } = this.state;
    return loading ? <Loading /> : (
      <div data-testid="page-favorites">
        <Header />
        <h1>Favorites</h1>
        <MusicCard
          albumArtist={ listFavSongs }
          funcFavorite={ this.favSongs }
        />
      </div>
    );
  }
}

export default Favorites;
