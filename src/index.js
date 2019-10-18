import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import useDebounce from "./useDebounce";

const DELAY = 500;
const CARD_SEARCH_URL = "https://api.scryfall.com/cards/autocomplete";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isError, setIsError] = useState(false);

  const debouncedSearchInput = useDebounce(searchInput, DELAY);

  useEffect(() => {
    if (debouncedSearchInput) {
      const fetchResults = async () => {
        setIsError(false);
        setIsSearching(true);
        try {
          const rawResults = await fetch(
            `${CARD_SEARCH_URL}?q=${debouncedSearchInput}`
          );
          let results = await rawResults.json();
          setResults(results.data);
          console.log(results.data);
        } catch (error) {
          console.log(error);
          setIsError(true);
        }
        setIsSearching(false);
      };

      fetchResults();
    }
  }, [debouncedSearchInput]);

  return (
    <div className="App">
      <h1>Magic Card autocomplete</h1>
      <h3>Try searching for a magic card</h3>

      <input
        type="text"
        className="input"
        onChange={e => setSearchInput(e.target.value)}
      />
      {isSearching && <p>Searching...</p>}
      {!isSearching && results.length > 0 && results.map(card => <p>{card}</p>)}
      {isError && <p>Error!</p>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
