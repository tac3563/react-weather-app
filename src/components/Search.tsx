import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import StatusBar from "./StatusBar";

export default function Widgets() {
  return (
    <div className="search-page-container">
      <div className="search-page-wrapper">
        <StatusBar />
        <SearchBar />
        <SearchResults />
      </div>
    </div>
  );
}
