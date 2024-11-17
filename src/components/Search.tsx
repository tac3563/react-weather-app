import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchLocations from "./SearchLocations";
import SearchResults from "./SearchResults";
import StatusBar from "./StatusBar";

export default function Widgets() {
  const [isSearching, setIsSearching] = useState(false);

  function addIsSearching() {
    setIsSearching(true);
  }

  function clearIsSearching() {
    setIsSearching(false);
  }

  return (
    <div className="search-page-container">
      <div className="search-page-wrapper">
        <StatusBar />
        <SearchBar
          addIsSearching={addIsSearching}
          clearIsSearching={clearIsSearching}
        />
        {!isSearching && <SearchResults />}
        {isSearching && <SearchLocations />}
      </div>
    </div>
  );
}
