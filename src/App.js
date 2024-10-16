import './output.css';
import Navbar from './Navbar.js';
import NavbarPanel from './NavbarPanel.js';
import { useNavbar } from './Main.js';
import LandingPage from './LandingPage.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Copyright from './Copyright.js';
import Mastery from './Mastery.js';

function App() {
  const { isPanelOpen, togglePanel } = useNavbar();

  return (
    <div className="App">
      <Navbar isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
      <NavbarPanel isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
      <LandingPage />
      <About />
      <Mastery />
      <Projects />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
