import { Link } from "react-router-dom";

export default function WeatherDetails() {
  return (
    <Link className="weather-details-router" to="/">
      <div className="weather-details-container">
        <p>{`< Weather`}</p>
      </div>
    </Link>
  );
}
