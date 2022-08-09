import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <h2>Search</h2>
        <form>
          <input
            type="text"
            name=""
            id=""
            data-testid="search-artist-input"
          />
          <button
            type="button"
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
