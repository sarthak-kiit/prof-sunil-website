import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, GraduationCap } from 'lucide-react';
import { profile } from '../data/profileData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <GraduationCap size={22} />
              <span>{profile.name}</span>
            </div>
            <p>{profile.designation}, {profile.institution}</p>
            <p className="footer-qual">{profile.qualifications}</p>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/research">Research</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/awards">Awards</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links-col">
            <h4>Academic</h4>
            <Link to="/books">Books</Link>
            <Link to="/teaching">Teaching</Link>
            <Link to="/guidance">Research Guidance</Link>
            <Link to="/consultancy">Consultancy</Link>
            <Link to="/editorial">Editorial Roles</Link>
            <Link to="/cv">Download CV</Link>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <a href={`mailto:${profile.email[0]}`}><Mail size={14}/>{profile.email[0]}</a>
            <a href={`tel:${profile.phone}`}><Phone size={14}/>{profile.phone}</a>
            <span><MapPin size={14}/>Sri Sri University, Cuttack, Odisha</span>
            <a href={profile.googleScholar} target="_blank" rel="noreferrer" className="scholar-link">
              <ExternalLink size={14}/>Google Scholar Profile
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Prof. Sunil Kumar Dhal. Sri Sri University, Cuttack, India.</p>
          <p>All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--navy-mid);
          color: rgba(255,255,255,0.8);
          padding: 60px 0 0;
          margin-top: 80px;
        }
        [data-theme="dark"] .footer { background: #0a1420; }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-logo {
          display: flex; align-items: center; gap: 10px;
          font-family: var(--font-display);
          font-size: 1.1rem; font-weight: 700;
          color: white; margin-bottom: 12px;
        }
        .footer-brand p { font-size: 0.88rem; color: rgba(255,255,255,0.65); line-height: 1.6; }
        .footer-qual { margin-top: 8px; font-size: 0.78rem !important; color: rgba(255,255,255,0.45) !important; }
        .footer-links-col h4, .footer-contact h4 {
          font-family: var(--font-sans); font-size: 0.78rem;
          font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.5); margin-bottom: 16px;
        }
        .footer-links-col a, .footer-contact a, .footer-contact span {
          display: block; color: rgba(255,255,255,0.72);
          text-decoration: none; font-size: 0.88rem;
          margin-bottom: 8px; transition: color 0.2s;
        }
        .footer-links-col a:hover, .footer-contact a:hover { color: var(--accent-light); }
        .footer-contact a, .footer-contact span {
          display: flex; align-items: flex-start; gap: 8px;
        }
        .footer-contact svg { flex-shrink: 0; margin-top: 2px; }
        .scholar-link { color: var(--accent-light) !important; }
        .footer-bottom {
          padding: 20px 0;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.82rem; color: rgba(255,255,255,0.4);
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 4px; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
