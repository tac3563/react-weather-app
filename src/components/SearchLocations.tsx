export default function SearchLocations({ suggestedLocations }) {
  return (
    <div className="search-locations-container">
      <ul className="search-locations-list">
        {suggestedLocations.length > 0 ? (
          suggestedLocations.map((location, index) => (
            <li key={index} className="search-locations-list--item">
              <a href="#">{`${location.name}, ${location.state ?? ""} ${
                location.country
              }`}</a>
            </li>
          ))
        ) : (
          <li className="search-locations-list--item">No results found</li>
        )}
      </ul>
    </div>
  );
}
