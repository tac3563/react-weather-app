import { useState } from "react";

/* 
  1. Save input value into state.
  2. Create API fetch request using Geocoding endpoint and the input value in the parameter.
  3. Save response into an array and console log the values
  4. Update state on change and send new fetch request
  5. Update locations array with new values after each new fetch request. 
  6. When a user clicks on the suggested location, save that location to the city state and then route to the homepage with a new fetch request from fetchWeatherData() function but add the Add/Cancel component.{City} will be used in the API call which is why the city local state needs to be updated to the suggestedLocation.
  7. When 'Add' is clicked, route back to the search page but add that location to the pinnedLocations array.

  Geocoding API example call: http://api.openweathermap.org/geo/1.0/direct?q={city},{state code},{country code}&limit={limit}&appid={API key}
*/

export default function SearchBar({ addIsSearching, clearIsSearching }) {
  const [city, setCity] = useState("");
  const [isFocused, setFocused] = useState(false);

  const handleSearch = (inputValue) => {
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
  };

  async function fetchSuggestedLocations(city) {
    const weatherApiKey = "51a3f77301fe0e11df19290faedd2a16";
    const limit = 15;

    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${weatherApiKey}`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch {
      throw new Error("Fetching suggested locations failed");
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
            fetchSuggestedLocations(inputValue);
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
