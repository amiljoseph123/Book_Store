import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./searchresults.css";

function SearchResults() {
  const { query } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
        const data = await res.json();

        // Filter duplicates and match titles that directly include the search term
        const unique = [];

        const seen = new Set();

        for (const book of data.docs) {
          if (book.title?.toLowerCase().includes(query.toLowerCase())) {
            const key = `${book.title}-${book.author_name?.[0]}`;

            if (!seen.has(key)) {
              unique.push(book);
              seen.add(key);
            }
          }
        }
        setBooks(unique);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBooks();
  }, [query]);

  return (
    <div className="results-wrapper">
      <h1>Search results for "{query}"</h1>
      <ul>
        {books?.map((book, idx) => (
          <li key={idx}>
            <Link to={`/book/${book.key?.split('/').pop()}`}>
              {book.title} — {book.author_name?.[0]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchResults;
