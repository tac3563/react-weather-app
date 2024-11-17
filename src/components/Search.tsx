import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchLocations from "./SearchLocations";
import SearchResults from "./SearchResults";
import StatusBar from "./StatusBar";

/* 
  1. Set is isSearching state
  2. Create function which updates the state
  3. Pass update function as a prop to SearchBar
  4. Within SearchBar call the function when input value > 0

*/

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
