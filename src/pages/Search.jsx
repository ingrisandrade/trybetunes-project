import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends Component {
  state ={
    btnDisabled: true,
    searchArtist: '',
    loadingDisable: false,
    artist: '',
    listMusic: [],
  }

  inputChange = ({ name, value }) => {
    this.setState({
      [name]: value,
    }, () => {
      this.habilitateBtn();
    });
  }

  habilitateBtn = () => {
    const { searchArtist } = this.state;
    const caracterMin = 2;
    const validateCaracter = searchArtist.length >= caracterMin;
    this.setState({
      btnDisabled: !validateCaracter,
    });
  }

  btnClickSearch = () => {
    const { searchArtist } = this.state;
    this.setState({
      loadingDisable: true,
      artist: searchArtist,
    }, async () => {
      const fontAlbuns = await searchAlbumsAPI(searchArtist);
      this.setState({
        listMusic: fontAlbuns,
        loadingDisable: false,
        searchArtist: '',
      });
    });
  }

  render() {
    const {
      searchArtist,
      btnDisabled,
      listMusic,
      artist,
      loadingDisable,
    } = this.state;

    if (loadingDisable) return <Loading />;

    return (
      <div data-testid="page-search">
        <Header />
        <h2>Search</h2>
        <form>
          <input
            type="text"
            name="searchArtist"
            value={ searchArtist }
            placeholder="Digite nome do artista"
            data-testid="search-artist-input"
            onChange={ ({ target }) => this.inputChange(target) }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ btnDisabled }
            onClick={ this.btnClickSearch }
          >
            Pesquisar
          </button>
        </form>
        <div>
          {
            (listMusic.length) ? (
              <div>
                <h3>
                  {
                    `Resultado de álbuns de: ${artist}`
                  }
                </h3>

                {listMusic.map(({
                  artistName,
                  collectionId,
                  collectionName,
                  artworkUrl100,
                }) => (
                  <div key={ collectionId }>
                    <Link
                      to={ `/album/${collectionId}` }
                      data-testid={ `link-to-album-${collectionId}` }
                    >
                      <img
                        src={ artworkUrl100 }
                        alt={ artistName }
                      />
                    </Link>

                    <p>{ collectionName }</p>

                    <p>{ artistName }</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>Nenhum álbum foi encontrado</p>
            )
          }
        </div>
      </div>
    );
  }
}

export default Search;
