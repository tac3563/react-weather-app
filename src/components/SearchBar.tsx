import { useState } from "react";
// import { fetchWeatherData } from "../data/weatherApi";

export default function SearchBar() {
  const [city, setCity] = useState("Leicester");

  const handleSearch = () => {
    console.log(city);
  };

  console.log(city);
  return (
    <>
      <h2 className="search-page-title">Weather</h2>
      <input
        type="search"
        placeholder="Search for a city or airport"
        name="Search"
        id="search-bar"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleSearch}
      />
    </>
  );
}
