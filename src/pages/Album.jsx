import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    albumArtist: [],
  }

  componentDidMount() {
    this.findSongs();
  }

  findSongs() {
    const { match: { params: { id } },
    } = this.props;
    const displayMusic = async () => {
      const songs = await getMusics(id);
      this.setState({
        albumArtist: songs,
      });
    };
    displayMusic();
  }

  render() {
    const {
      albumArtist,
    } = this.state;
    let collections = [];
    if (albumArtist.length > 0) {
      collections = [albumArtist[0]];
    }
    return (
      <div data-testid="page-album">
        <Header />
        {
          collections.map((collection) => (
            <div key={ collection.collectionName }>
              <div>
                <img
                  src={ collection.artworkUrl100 }
                  alt={ `imageMusic: ${collection.trackName}` }
                />
              </div>
              <p data-testid="album-name">
                {collection.collectionName}
                {collection.artistName}
              </p>
              <p data-testid="artist-name">
                { collection.artistName }
              </p>
            </div>
          ))
        }
        <MusicCard albumArtist={ albumArtist.slice(1) } />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.string,
}.isRequired;

export default Album;
