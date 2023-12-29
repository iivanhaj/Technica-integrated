import "./App.css";
import Sponsor from "./components/Sponsor";
import Landing from "./components/Landing";
import About from "./components/About";
import ImageSlider from "./components/ImageSlider";
import Schedule from "./components/Schedule";
import Prizes from "./components/Prizes";
import Tracks from "./components/Tracks";
import FAQ from "./components/FAQ";
import Judges from "./components/Judges";
import Footer from "./components/Footer";
import { ReactNebula, smallSolarSystem, bigSolarSystem } from "@flodlc/nebula";

function App() {
  return (
    <div className="App flex flex-col">
      <Landing />
      <About id="about"/>
      <Tracks id="tracks"/>
      <Prizes id="prizes"/>
      <Judges />
      <Sponsor />
      <Schedule />
      <ImageSlider />
      <FAQ />
      <Footer id="footer"/>
    </div>
  );
}

export default App;
