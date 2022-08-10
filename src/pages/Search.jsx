import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends Component {
  state ={
    btnDisabled: true,
    searchArtist: '',
    loadingDisable: true,
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

  // exibir a mensagem carregando: é o Loading
  btnClickSearch = async () => {
    const { searchArtist } = this.state;
    this.setState({
      loadingDisable: false, artist: searchArtist,
    });

    const list = await searchAlbumsAPI(searchArtist);
    this.setState({
      loadingDisable: true, searchArtist: '', listMusic: list,
    });
  }

  render() {
    const {
      searchArtist,
      btnDisabled,
      loadingDisable,
      artist,
      listMusic,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <h2>Search</h2>
        { !loadingDisable ? <Loading /> : (
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
            >
              Pesquisar
            </button>
          </form>
          )
        }
      </div>
    );
  }
}

export default Search;
