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
import Judges from "./components/Judges";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Tracks />
      <Prizes />
      <Judges />
      <Sponsor />
      <Schedule />
      <ImageSlider />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
