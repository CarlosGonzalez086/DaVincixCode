import Home from "./Home/Home";
import "./App.css";
import "animate.css";
import HomeServicios from "./Home/HomeServicios";
import HomeAbout from "./Home/HomeAbout";
import HomeContact from "./Home/HomeContact";
import HomeSocial from "./Home/HomeSocial";
import HomeWorks from "./Home/HomeWorks";

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
      <HomeWorks />
      <HomeAbout />
      <HomeContact />
      <HomeSocial />
    </div>
  );
}

export default App;
