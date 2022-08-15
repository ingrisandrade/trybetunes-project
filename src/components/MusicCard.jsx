import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const {
      albumArtist,
    } = this.props;
    return (
      <div>
        <p>MusicCard</p>
        {
          albumArtist.map((songs) => (
            <div key={ songs.trackName }>
              <p>
                { songs.trackName }
              </p>
              <audio
                data-testid="audio-component"
                src="{previewUrl}"
                controls
              >
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
                .
              </audio>
            </div>
          ))
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  albumArtist: PropTypes.string,
}.isRequired;

export default MusicCard;
