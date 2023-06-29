import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Organizer from "./components/Organizers/Organizer";
import { Place } from "./components/Place/Place";
import { Registration } from "./components/Registration/Registration";
import Schedule from "./components/Schedule/Schedule";
import Speaker from "./components/Speaker/Speaker";
import Sponsor from "./components/Sponsor/Sponsor";

function App() {
  return <div ><Header/><About/><Place></Place><Sponsor/><Schedule/><Registration/><Organizer/><Footer/></div>;
}

export default App;
