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
import { useEffect } from 'react';

function App() {
  const { isPanelOpen, togglePanel } = useNavbar();

  useEffect(() => {
    // Check if we're not already on the target domain
    if (window.location.hostname !== 'rinmeng.vercel.app') {
      window.location.href = 'https://rinmeng.vercel.app';
    }
  }, []);

  return (
    <div className="App">
      {/* redirect to https://rinmeng.vercel.app */}

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
