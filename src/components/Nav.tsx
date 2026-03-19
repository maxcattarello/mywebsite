'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'About' },
  { href: '#achievements', label: 'Work' },
  { href: '#books', label: 'Books' },
  { href: '#podcasts', label: 'Podcasts' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`nav${scrolled ? ' nav--scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <div className="nav__inner">
          <a
            href="#home"
            className="nav__logo"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            Max Cattarello
          </a>

          {/* Desktop links */}
          <ul className="nav__links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="nav__hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`hamburger-line${menuOpen ? ' hamburger-line--open' : ''}`} />
            <span className={`hamburger-line${menuOpen ? ' hamburger-line--open' : ''}`} />
            <span className={`hamburger-line${menuOpen ? ' hamburger-line--open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav__overlay${menuOpen ? ' nav__overlay--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav__overlay-link"
                onClick={(e) => handleNavClick(e, link.href)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
