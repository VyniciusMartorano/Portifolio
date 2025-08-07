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

  const handleNavigation = (section) => {
    closeMenu();
    // Se não estiver na home, redireciona para home primeiro
    if (window.location.pathname !== '/') {
      window.location.href = `/#${section}`;
    } else {
      // Se estiver na home, apenas faz scroll para a seção
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Fallback: tenta encontrar a seção por outros IDs possíveis
          const fallbackElement = document.querySelector(`[id*="${section}"]`);
          if (fallbackElement) {
            fallbackElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100); // Pequeno delay para garantir que o DOM esteja pronto
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="home">
      <div className="navbar-container">
        <a href="/" className="navbar-brand not-select" onClick={closeMenu}>
          &lt; Vynicius /&gt;
        </a>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" className="link-nav" onClick={() => handleNavigation('home')}>
            Home
          </a>
          <a href="#" className="link-nav" onClick={() => handleNavigation('about')}>
            About
          </a>
          <a href="#" className="link-nav" onClick={() => handleNavigation('work')}>
            Projects
          </a>
          <a href="#" className="link-nav" onClick={() => handleNavigation('skills')}>
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
