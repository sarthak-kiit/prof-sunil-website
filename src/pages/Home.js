import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, FlaskConical, ExternalLink, ArrowRight, FileText, Mail } from 'lucide-react';
import { profile, publications, awards, research } from '../data/profileData';

export default function Home() {
  const featuredPubs = publications.filter(p => p.journal.includes('Elsevier')).slice(0, 3);
  const featuredAwards = awards.slice(0, 3);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="container hero-inner">
          <div className="hero-photo-wrap">
            <img src={profile.photo} alt={profile.name} className="hero-photo" />
            <div className="hero-photo-ring" />
          </div>
          <div className="hero-content">
            <span className="section-label">Professor & Researcher</span>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-designation">{profile.designation} · {profile.institution}</p>
            <p className="hero-qual">{profile.qualifications}</p>
            <p className="hero-bio">
              A distinguished academician with over 25 years of experience in teaching, research, and academic leadership. 
              Expert in Data Analytics, Cloud Computing, Business Analytics, and Financial Engineering. 
              Author of 7 books, 35+ peer-reviewed publications, and mentor to numerous M.Tech and Ph.D. scholars.
            </p>
            <div className="hero-actions">
              <a href={profile.googleScholar} target="_blank" rel="noreferrer" className="btn btn-primary">
                <ExternalLink size={16}/> Google Scholar
              </a>
              <Link to="/cv" className="btn btn-outline">
                <FileText size={16}/> Download CV
              </Link>
              <Link to="/contact" className="btn btn-accent">
                <Mail size={16}/> Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-4">
            {[
              { num: profile.stats.experience + ' Yrs', label: 'Academic Experience', icon: <Users size={24}/> },
              { num: profile.stats.publications, label: 'Research Publications', icon: <BookOpen size={24}/> },
              { num: profile.stats.booksAuthored, label: 'Books Authored', icon: <FileText size={24}/> },
              { num: profile.stats.phdGuided, label: 'Ph.D. Scholars Guided', icon: <Award size={24}/> },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Expertise</span>
            <h2>Research Interests</h2>
            <div className="divider" />
          </div>
          <div className="grid-3">
            {research.primary.map((r, i) => (
              <div key={i} className="research-chip card">
                <FlaskConical size={18} className="chip-icon"/>
                <span>{r}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 10}}>
            {research.secondary.map((r, i) => (
              <span key={i} className="badge badge-blue">{r}</span>
            ))}
          </div>
          <div style={{marginTop: 28}}>
            <Link to="/research" className="btn btn-outline btn-sm">View Full Research Profile <ArrowRight size={14}/></Link>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header" style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap'}}>
            <div>
              <span className="section-label">Scholarly Work</span>
              <h2>Featured Publications</h2>
              <div className="divider" />
            </div>
            <Link to="/publications" className="btn btn-outline btn-sm">All Publications <ArrowRight size={14}/></Link>
          </div>
          <div className="grid-3" style={{marginTop: 0}}>
            {featuredPubs.map((p, i) => (
              <div key={i} className="card pub-card">
                <span className="badge badge-blue" style={{marginBottom:10}}>{p.category}</span>
                <h4 className="pub-title">{p.title}</h4>
                <p className="pub-journal">{p.journal}</p>
                <p className="pub-volume">{p.volume}</p>
                <span className="pub-year">{p.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap'}}>
            <div>
              <span className="section-label">Recognition</span>
              <h2>Awards & Honours</h2>
              <div className="divider" />
            </div>
            <Link to="/awards" className="btn btn-outline btn-sm">All Awards <ArrowRight size={14}/></Link>
          </div>
          <div className="grid-3" style={{marginTop:0}}>
            {featuredAwards.map((a, i) => (
              <div key={i} className="card award-card">
                <div className="award-icon"><Award size={28}/></div>
                <h4>{a.title}</h4>
                <p className="award-year">{a.year}</p>
                <p className="award-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, var(--navy-mid) 0%, var(--blue) 60%, #1a5f9a 100%);
          padding: 80px 0 72px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hero-inner {
          display: flex; align-items: center; gap: 60px;
          position: relative; z-index: 1;
        }
        .hero-photo-wrap {
          flex-shrink: 0; position: relative;
        }
        .hero-photo {
          width: 200px; height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid rgba(255,255,255,0.25);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .hero-photo-ring {
          position: absolute; inset: -8px;
          border-radius: 50%;
          border: 2px dashed rgba(255,255,255,0.2);
        }
        .hero-content { flex: 1; }
        .hero-content .section-label { color: var(--accent-light); }
        .hero-name {
          font-family: var(--font-display);
          font-size: 2.6rem; font-weight: 700;
          color: white; margin: 6px 0;
        }
        .hero-designation { color: rgba(255,255,255,0.8); font-size: 1.05rem; margin-bottom: 4px; }
        .hero-qual { color: rgba(255,255,255,0.55); font-size: 0.85rem; margin-bottom: 16px; }
        .hero-bio { color: rgba(255,255,255,0.78); max-width: 580px; margin-bottom: 28px; line-height: 1.8; font-size: 0.95rem; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .stat-icon { color: var(--blue); margin-bottom: 8px; }
        .research-chip { display: flex; align-items: center; gap: 12px; padding: 18px 20px; }
        .chip-icon { color: var(--blue); flex-shrink: 0; }
        .research-chip span { font-size: 0.92rem; font-weight: 500; color: var(--text-body); }
        .pub-card { display: flex; flex-direction: column; gap: 6px; }
        .pub-title { font-size: 0.92rem; font-family: var(--font-serif); color: var(--text-dark); line-height: 1.5; }
        .pub-journal { font-size: 0.82rem; color: var(--blue-mid); font-style: italic; }
        .pub-volume { font-size: 0.78rem; color: var(--text-muted); }
        .pub-year { font-size: 0.78rem; font-weight: 600; color: var(--accent); margin-top: auto; }
        .award-card { text-align: center; }
        .award-icon { color: var(--accent); margin-bottom: 12px; }
        .award-card h4 { font-size: 0.95rem; color: var(--text-dark); }
        .award-year { font-size: 0.78rem; font-weight: 700; color: var(--blue); margin: 4px 0; }
        .award-desc { font-size: 0.82rem; color: var(--text-muted); }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column; text-align: center; gap: 28px; }
          .hero-photo { width: 150px; height: 150px; }
          .hero-name { font-size: 1.8rem; }
          .hero-actions { justify-content: center; }
        }
      `}</style>
    </div>
  );
}
