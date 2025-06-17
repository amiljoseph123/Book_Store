import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="search-wrapper">
      <h1>Book Finder</h1>
      <p>Search for your favorite books and view details instantly</p>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter book title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  )
}

export default Search;
