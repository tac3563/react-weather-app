import Home from "./Home";
import WeatherDetails from "./WeatherDetails";
import Widgets from "./Search";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="app-wrapper">
        <div id="app">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details" element={<WeatherDetails />}></Route>
            <Route path="/search" element={<Widgets />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
