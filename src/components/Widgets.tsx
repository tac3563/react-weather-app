// import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import StatusBar from "./StatusBar";

export default function Widgets() {
  return (
    <div className="search-page-container">
      <StatusBar />
      <SearchBar />
    </div>
  );
}
