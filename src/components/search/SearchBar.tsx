import { useState } from "react";

export default function SearchBar({
  addIsSearching,
  clearIsSearching,
  setSuggestedLocations,
}) {
  const [city, setCity] = useState("");
  const [isFocused, setFocused] = useState(false);

  const handleSearch = (inputValue: string) => {
    inputValue.length > 0 ? addIsSearching() : clearIsSearching();
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const clearSearch = () => {
    setCity("");
    setFocused(false);
    clearIsSearching();
    setSuggestedLocations([]);
  };

  async function fetchSuggestedLocations(city: string) {
    const weatherApiKey = "51a3f77301fe0e11df19290faedd2a16";
    const limit = 15;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${weatherApiKey}`
      );
      const data = await response.json();
      setSuggestedLocations(data);
      return data;
    } catch (error) {
      console.error("Error fetching suggested locations:", error);
    }
  }

  return (
    <div className="search-bar-container">
      {!isFocused && <h2 className="search-page-title">Weather</h2>}
      <div className="search-input-wrapper">
        <input
          type="search"
          placeholder="Search for a city or airport"
          name="Search"
          id="search-bar"
          value={city}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => {
            const inputValue = e.target.value;
            setCity(inputValue);
            handleSearch(inputValue);
            if (inputValue.length > 0) {
              fetchSuggestedLocations(inputValue);
            }
          }}
        />
        {isFocused && (
          <>
            <span onMouseDown={clearSearch}>Cancel</span>
            <div className="search-results-overlay"></div>
          </>
        )}
      </div>
    </div>
  );
}
