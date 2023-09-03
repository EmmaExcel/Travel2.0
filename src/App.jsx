import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Sponsor } from "./components/sponsor/Sponsor";
import { BookFlight } from "./pages/BookFlight";
import { Explore } from "./pages/Explore";
import { FreePackage } from "./pages/FreePackage";
import { Landing } from "./pages/Landing";
import { Services } from "./pages/Services";

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
    </>
  );
}

export default App;
