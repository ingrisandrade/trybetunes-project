import React, { Component } from 'react';
import Header from '../components/Header';

class Album extends Component {
  state = {
    albumArtist: [],
  }

  componentDidMount () {
    this.findSongs();
  }

  findSongs() {
    const { match: { params: { id }}
    } = this.props;
    const displayMusic = async () => {
      const songs = await getMusics(id);
      this.setState({
        albumArtist: songs
      });
    };
    getMusics
  }

  render() {
    return (
      <div data-testid="page-album">
        <h1>Album</h1>
        <Header />
      </div>
    );
  }
}

export default Album;
