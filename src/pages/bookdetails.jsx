import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        // Open Library API
        const res = await fetch(`https://openlibrary.org/search.json?q=${id}`);
        const data = await res.json();

        if (data.docs.length > 0) {
          setBook(data.docs[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author_name?.[0]}</p>
      {book.cover_i && (
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
      )}

      {/* Display more details if you want */}
    </div>
  )
}

export default BookDetails;
