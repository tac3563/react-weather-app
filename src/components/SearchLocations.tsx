/* 
    1. Create Search Locations component DONE
    2. Style the component DONE
    3. Create isSearching state - local state in Search component which is updated by SearchBar and shared back down to Search child components (SearchBar, SearchLocations, SearchResults) DONE
    4. Add reduced search header markup to SearchBar component.
    5. Conditionally render the reduced header based on isSearching
    6. Set isSearching value to true if input.value > 0.
    7. Pass isSearch state value from Search -> SearchBar & SearchResults & SearchLocations

*/

export default function SearchLocations() {
  return (
    <div className="search-locations-container">
      <ul className="search-locations-list">
        <li className="search-locations-list--item">
          <a href="#">Oxford</a>
        </li>
        <li className="search-locations-list--item">
          <a href="#">London</a>
        </li>
        <li className="search-locations-list--item">
          <a href="#">Cambridge</a>
        </li>
      </ul>
    </div>
  );
}
