export default function HomepageHeader() {
  return (
    <>
      <div className="homepage-header-container">
        <h2 className="weather-location">London</h2>
        <h2 className="weather-temp"></h2>
        <div className="weather-temp-high-low">
          <p className="weather-temp-high"></p>
          <p className="weather-temp-low"></p>
        </div>
      </div>
    </>
  );
}
