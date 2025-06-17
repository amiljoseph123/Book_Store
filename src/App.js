import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/search";
import SearchResults from "./pages/searchresults";
import BookDetails from "./pages/bookdetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  )
}

export default App;
