import { useState } from "react";
import SearchBar from "./SearchBar.tsx";
import SearchLocations from "./SearchLocations.tsx";
import SearchResults from "./SearchResults.tsx";
import StatusBar from "../StatusBar.tsx";

export default function Search() {
  const [isSearching, setIsSearching] = useState(false);
  const [suggestedLocations, setSuggestedLocations] = useState([]);

  function addIsSearching() {
    setIsSearching(true);
  }

  function clearIsSearching() {
    setIsSearching(false);
    setSuggestedLocations([]);
  }

  return (
    <div className="search-page-container">
      <div className="search-page-wrapper">
        <StatusBar />
        <SearchBar
          setSuggestedLocations={setSuggestedLocations}
          addIsSearching={addIsSearching}
          clearIsSearching={clearIsSearching}
        />
        {!isSearching && <SearchResults />}
        {isSearching && (
          <SearchLocations suggestedLocations={suggestedLocations} />
        )}
      </div>
    </div>
  );
}
