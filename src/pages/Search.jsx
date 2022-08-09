import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  state ={
    btnDisabled: true,
    searchArtist: '',
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

  render() {
    const {
      searchArtist,
      btnDisabled,
    } = this.state;

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
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
