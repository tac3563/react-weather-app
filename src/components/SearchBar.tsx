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

  const limit = 15
  setCity(suggestedLocation)

*/

export default function SearchBar({ addIsSearching, clearIsSearching }) {
  const [city, setCity] = useState("");

  const handleSearch = (inputValue) => {
    console.log(inputValue);

    if (inputValue.length >= 1) {
      addIsSearching();
    } else {
      clearIsSearching();
    }
  };

  return (
    <>
      <h2 className="search-page-title">Weather</h2>
      <input
        type="search"
        placeholder="Search for a city or airport"
        name="Search"
        id="search-bar"
        value={city}
        onChange={(e) => {
          const inputValue = e.target.value;
          setCity(inputValue);
          handleSearch(inputValue);
        }}
      />
    </>
  );
}
