/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../imgs/rmlogo.png';
import hamburger from '../../imgs/icons/navbaricon.png';

function Navbar({ isPanelOpen, togglePanel }) {
    return (
        <nav className="fixed w-full z-10 bg-gradient-to-t from-transparent to-black flex justify-between items-center px-10 py-8">
            <a href="" className="w-24 lg:w-44 h-auto point">
                <img
                    id="navbar-logo"
                    className={`t500e ${isPanelOpen ? 'opacity-0' : 'opacity-100'}`}
                    src={logo}
                    alt="rin meng logo"
                />
            </a>
            <img
                id="hamburger"
                className={`${isPanelOpen ? 'opacity-0' : 'opacity-80'} w-12 lg:w-20 h-auto point zoomin t200e  hover:opacity-100 `}
                src={hamburger}
                alt="navbar icon"
                onClick={togglePanel} // Handle click to toggle panel
            />
        </nav>
    );
}

export default Navbar;
