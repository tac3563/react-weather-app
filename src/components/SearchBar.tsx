export default function SearchBar() {
  return (
    <div className="search-page-wrapper">
      <h2>Weather</h2>
      <input
        type="search"
        placeholder="Search for a city or airport"
        name="Search"
        id="search-bar"
      />
    </div>
  );
}
