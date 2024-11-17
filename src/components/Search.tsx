import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchLocations from "./SearchLocations";
import SearchResults from "./SearchResults";
import StatusBar from "./StatusBar";

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
