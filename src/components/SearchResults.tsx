export default function SearchResults() {
  return (
    <div className="search-results-container">
      <div className="search-result">
        <div className="search-result-left-col">
          <h2 className="search-result-location">Leicester</h2>
          <p className="search-result-time">9:11pm</p>
          <p className="search-result-condition">Partly Cloudy</p>
        </div>
        <div className="search-result-right-col">
          <p className="search-result-temp">22&deg;</p>

          <div className="search-result-temp-range">
            <p className="search-result-temp-high">H: 29&deg;</p>
            <p className="search-result-temp-low">L: 15&deg;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
