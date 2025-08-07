import { useState, useEffect } from "react";
import "./index.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="home">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand not-select" onClick={closeMenu}>
          &lt; Vynicius /&gt;
        </a>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="link-nav" onClick={closeMenu}>
            Home
          </a>
          <a href="#work" className="link-nav" onClick={closeMenu}>
            Work
          </a>
          <a href="#about" className="link-nav" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" className="link-nav" onClick={closeMenu}>
            Skills
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
