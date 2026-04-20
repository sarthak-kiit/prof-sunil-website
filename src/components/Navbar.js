import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, GraduationCap, ChevronDown } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  {
    label: 'Academic', path: '#',
    children: [
      { label: 'Research', path: '/research' },
      { label: 'Publications', path: '/publications' },
      { label: 'Books', path: '/books' },
      { label: 'Teaching', path: '/teaching' },
    ]
  },
  {
    label: 'Contributions', path: '#',
    children: [
      { label: 'Awards', path: '/awards' },
      { label: 'Editorial Roles', path: '/editorial' },
      { label: 'Research Guidance', path: '/guidance' },
      { label: 'Consultancy', path: '/consultancy' },
      { label: 'Resource Person', path: '/resource-person' },
      { label: 'Academic Contributions', path: '/academic-contributions' },
    ]
  },
  { label: 'CV', path: '/cv' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ darkMode, toggleDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDropdown(null); }, [location]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <GraduationCap size={22} />
          <span>Prof. S. K. Dhal</span>
        </Link>

        <div className="navbar-links">
          {navLinks.map(link =>
            link.children ? (
              <div
                key={link.label}
                className="nav-dropdown"
                onMouseEnter={() => setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className={`nav-link dropdown-trigger${link.children.some(c => c.path === location.pathname) ? ' active' : ''}`}>
                  {link.label} <ChevronDown size={13} />
                </button>
                {dropdown === link.label && (
                  <div className="dropdown-menu">
                    {link.children.map(child => (
                      <Link key={child.path} to={child.path} className={`dropdown-item${location.pathname === child.path ? ' active' : ''}`}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.path} to={link.path} className={`nav-link${location.pathname === link.path ? ' active' : ''}`}>
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleDark} aria-label="Toggle theme">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {navLinks.map(link =>
            link.children ? (
              <div key={link.label}>
                <div className="mobile-section-label">{link.label}</div>
                {link.children.map(child => (
                  <Link key={child.path} to={child.path} className={`mobile-link child${location.pathname === child.path ? ' active' : ''}`}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={link.path} to={link.path} className={`mobile-link${location.pathname === link.path ? ' active' : ''}`}>
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
