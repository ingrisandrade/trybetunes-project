import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  state = {
    favSongs: [],
    loading: false,
  }

  addSongCh = async (trackId) => {
    const { albumArtist } = this.props;

    this.setState({ loading: true });
    const favSongsChecked = albumArtist.find((song) => song.trackId === trackId);
    this.setState((prevState) => ({
      favSongs: [...prevState.favSongs, favSongsChecked],
    }));
    await addSong(favSongsChecked);
    this.setState({ loading: false });
  }

  render() {
    const { albumArtist } = this.props;
    const {
      loading,
      favSongs,
    } = this.state;

    return loading ? <Loading /> : (
      <div>
        <p>MusicCard</p>
        {
          albumArtist.map(({ previewUrl, trackId, trackName }) => (
            <ul key={ trackId }>
              <li>
                <h2>{ trackName }</h2>
                <audio
                  data-testid="audio-component"
                  src={ previewUrl }
                  controls
                >
                  <track kind="captions" />
                  O seu navegador não suporta
                  <code>audio</code>
                  .
                </audio>
              </li>
              <label htmlFor="musicas-favoritas">
                Favorita
                <input
                  type="checkbox"
                  name="musicas-favoritas"
                  id="musicas-favoritas"
                  data-testid={ `checkbox-music-${trackId}` }
                  checked={ favSongs.some((song) => song.trackId === trackId) }
                  onChange={ () => this.addSongCh(trackId) }
                />
              </label>
            </ul>
          ))
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  albumArtist: PropTypes.arrayOf(PropTypes.shape({
    previewUrl: PropTypes.string,
    trackId: PropTypes.number,
    trackName: PropTypes.string,
  })),
}.isRequired;

export default MusicCard;
