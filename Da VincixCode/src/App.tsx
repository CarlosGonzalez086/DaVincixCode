import Home from "./Home/Home";
import "./App.css";
import "animate.css";
import HomeServicios from "./Home/HomeServicios";
import HomeAbout from "./Home/HomeAbout";
import HomeContact from "./Home/HomeContact";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Home />
      <HomeServicios />
      <HomeAbout />
      <HomeContact />
    </div>
  );
}

export default App;
