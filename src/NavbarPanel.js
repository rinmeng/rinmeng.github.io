import './output.css';
import logo from './imgs/rmlogo.png';
import cross from './imgs/icons/cross.png';
import arrowright from './imgs/icons/arrowright.png';
import three from './imgs/three.png';
import githublogo from './imgs/icons/githublogo.png';
import linkedinlogo from './imgs/icons/linkedinlogo.png';
import maillogo from './imgs/icons/maillogo.png';
import instagramlogo from './imgs/icons/instagramlogo.png';

function NavbarPanel({ isPanelOpen, togglePanel }) {
    return (
        <div>
            <nav
                id="navbar-panel"
                className={`z-20 w-4/5 h-full lg:w-2/5 glass-slate fixed right-0 rounded-l-3xl t200e 
            ${isPanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} // Handle visibility based on isPanelOpen
            >
                <div className="flex justify-between items-center mp5">
                    <button id="cross" className="point group t200e flex items-center" aria-label="Close" onClick={togglePanel}>
                        <img className="size-8 lg:size-12 opacity-70 t200e 
                     group-hover:rotate-180 group-hover:opacity-100 " src={cross} alt="cross" />
                        <img className="arrow-icon-pop-right opacity-0 size-8 lg:size-12 t200e rotate-180 " alt="arrow icon" src={arrowright} />
                    </button>
                    <a href="#landing" className="h-auto point group flex items-center">
                        <img className="arrow-icon-pop-left opacity-0 size-8 lg:size-20 t200e " alt="arrow icon" src={arrowright} />
                        <img className="w-24 lg:w-44" src={logo} alt="rin meng logo" />
                    </a>
                </div>

                <div className="flex flex-col justify-center items-center mp3 font-normal">
                    <a href="#about" className="text-3xl point group mp3">
                        <span className="nav-option flex justify-center items-center -translate-x-3 opacity-80 group-hover:opacity-100 group-hover:translate-x-0 t200e">
                            <img className="size-8 fixed opacity-0 -left-3 group-hover:opacity-100 group-hover:left-32 t100d200e" src={three} alt="three icon" />
                            <img className="arrow-icon-pop-left opacity-0 size-8 t200e" alt="arrow icon" src={arrowright} />
                            About
                        </span>
                    </a>
                    <a href="#mastery" className="text-3xl point group mp3">
                        <span className="nav-option flex justify-center items-center -translate-x-3 opacity-80 group-hover:opacity-100 group-hover:translate-x-0 t200e">
                            <img className="size-8 fixed opacity-0 -left-3 group-hover:opacity-100 group-hover:left-36 t100d200e" src={three} alt="three icon" />
                            <img className="arrow-icon-pop-left opacity-0 size-8 t200e" alt="arrow icon" src={arrowright} />
                            Mastery
                        </span>
                    </a>
                    <a href="#projects" className="text-3xl point group mp3">
                        <span className="nav-option flex justify-center items-center -translate-x-3 opacity-80 group-hover:opacity-100 group-hover:translate-x-0 t200e">
                            <img className="size-8 fixed opacity-0 -left-3 group-hover:opacity-100 group-hover:left-36 t100d200e" src={three} alt="three icon" />
                            <img className="arrow-icon-pop-left opacity-0 size-8 t200e" alt="arrow icon" src={arrowright} />
                            Projects
                        </span>
                    </a>
                    <a href="#contactsection" className="text-3xl point group mp3">
                        <span className="nav-option flex justify-center items-center -translate-x-3 opacity-80 group-hover:opacity-100 group-hover:translate-x-0 t200e">
                            <img className="size-8 fixed opacity-0 -left-3 group-hover:opacity-100 group-hover:left-36 t100d200e" src={three} alt="three icon" />
                            <img className="arrow-icon-pop-left opacity-0 size-8 t200e" alt="arrow icon" src={arrowright} />
                            Contact
                        </span>
                    </a>
                </div>
                <div className="quicklinks mp3">
                    <div className="flex justify-center items-center">
                        <a target="_blank" rel="noreferrer" href="https://www.github.com/rinmeng"
                            className="ql point nudgeup fadein80 t200e">
                            <img className="size-12 m-3" src={githublogo} alt="github icon" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rin-meng-b28910234/"
                            className="ql point nudgeup fadein80 t200e">
                            <img className="size-12 m-3" src={linkedinlogo} alt="linkedin icon" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="mailto:phurinmeng@gmail.com"
                            className="ql point nudgeup fadein80 t200e">
                            <img className="size-12 m-3" src={maillogo} alt="mail icon" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rin.m04/?theme=dark"
                            className="ql point nudgeup fadein80 t200e">
                            <img className="size-12 m-3" src={instagramlogo} alt="instagram icon " />
                        </a>
                    </div>
                </div>

            </nav>
            <nav>
                <div id="blur-panel" className={`fixed -z-10 w-full h-full bg-black t500e ${isPanelOpen ? 'z-10 opacity-75 ' : 'opacity-0'}`}></div>
            </nav>

        </div>
    );
}

export default NavbarPanel;
