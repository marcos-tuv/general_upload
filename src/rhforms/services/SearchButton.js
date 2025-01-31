import React, { useState } from 'react';
import '../styles/SearchButton.css';

function SearchButton({ onSearch }) {
  const [searchId, setSearchId] = useState('');

  const handleSearch = () => {
    if (!searchId) {
      alert('Por favor, insira um ID válido.');
      return;
    }
    onSearch(searchId);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Digite o ID do relatório"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>
        <img src="/lupa.png" alt="Search" />
      </button>
    </div>
  );
}
export default SearchButton;
