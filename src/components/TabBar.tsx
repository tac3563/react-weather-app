import { Link } from "react-router-dom";

export default function TabBar() {
  return (
    <>
      <div className="tab-bar-container">
        <Link to="/search">
          <img className="map-icon" src="/src/assets/map.svg" alt="map icon" />
        </Link>
        <img src="/src\assets\tab-bar.png" alt="" />
        <Link to="/details">
          <img
            className="list-icon"
            src="/src/assets/list.svg"
            alt="list icon"
          />
        </Link>
      </div>
    </>
  );
}
