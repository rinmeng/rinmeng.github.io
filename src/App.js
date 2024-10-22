import './output.css';
import Navbar from '../src/components/navbar/Navbar.js';
import NavbarPanel from '../src/components/navbar/NavbarPanel.js';
import { useNavbar } from './Main.js';
import LandingPage from './components/LandingPage.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Copyright from './components/Copyright.js';
import Mastery from './components/Mastery.js';

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
