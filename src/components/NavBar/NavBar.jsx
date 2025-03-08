import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/logo-dark.svg'

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [menuOpen]);

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <img className='logo' src={logo} alt="logo" onClick={()=> navigate('/')} />
      </div>

      {/* Hamburger Menu Button */}
      <button className={`header-burger-btn burger ${menuOpen && 'burger--active'}`} data-test="header-burger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ?
          <span className="js-header-burger-close-title visually-hidden" hidden="">Close Menu</span>
          :
          <span className="js-header-burger-open-title visually-hidden">Open Menu</span>
        }
        <div className="burger-box">
          <div className="burger-inner header-menu-icon-tripleLineHamburger">
            <div className="top-bun"></div>
            <div className="patty"></div>
            <div className="bottom-bun"></div>
          </div>
        </div>
      </button>

      {/* Nav Links */}
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}
           onClick={() => {setMenuOpen(false); navigate('/')}}>Home</li>
          <li className={location.pathname === "/about-us" ? "active" : ""}
           onClick={() => {setMenuOpen(false); navigate('/about-us')}}>About</li>
          <li className={location.pathname === "/courses" ? "active" : ""}
           onClick={() => {setMenuOpen(false); navigate('/courses')}}>Courses</li>
          {/* <li className={location.pathname === "/projects" ? "active" : ""}
           onClick={() => {setMenuOpen(false); navigate('/')}}>Projects</li> */}
          <li className={location.pathname === "/contact" ? "active" : ""}
           onClick={() => {setMenuOpen(false); navigate('/contact')}}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
