import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

function SearchPage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (query.trim()) {
      // Ideally you'd fetch here first or just navigate with the search term
      navigate(`/book/${query}`);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for a book..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default SearchPage;
