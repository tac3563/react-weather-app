import HomepageHeader from "./HompageHeader";
import Modal from "./Modal";

function App() {
  return (
    <>
      <div id="app-wrapper">
        <div id="app">
          <div className="home-bg-wrapper"></div>
          <div className="app-content-container">
            <HomepageHeader />
            <Modal />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
