import "./App.css";
import Sponsor from "./components/Sponsor";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import ImageSlider from "./components/ImageSlider";
import Schedule from "./components/Schedule";
import Prizes from "./components/Prizes";
import Tracks from "./components/Tracks";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Tracks />
      <Prizes />
      <Sponsor />
      <ImageSlider />
      <Schedule />
      <FAQ />
    </div>
  );
}

export default App;
