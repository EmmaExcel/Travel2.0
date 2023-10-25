import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Sponsor } from "./components/sponsor/Sponsor";
import { BookFlight } from "./pages/BookFlight";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Explore } from "./pages/Explore";
import { FreePackage } from "./pages/FreePackage";
import { Landing } from "./pages/Landing";
import { Services } from "./pages/Services";
import { Recommendations } from "./pages/recommendations";

function App() {
  return (
    <>
      <Navbar />
      <Landing/>
      <Sponsor/>
      <Explore/>
      <Services/>
      <BookFlight/>
      <FreePackage/>
      <Recommendations/>
      {/* <Experience/> */}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
