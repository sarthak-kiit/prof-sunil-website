import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import { teaching, syllabusDesign, boardOfStudies, mdpParticipation } from '../data/profileData';

export default function Teaching() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Teaching</span></div>
          <h1>Teaching & Curriculum</h1>
          <p>Courses Taught, Syllabus Design & Academic Development</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Courses</span>
            <h2>Subjects Taught</h2>
            <div className="divider"/>
          </div>
          <div className="course-grid">
            {teaching.map((t, i) => (
              <div key={i} className="course-chip">
                <CheckCircle size={15}/>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Curriculum Development</span>
            <h2>Syllabus Design</h2>
            <div className="divider"/>
          </div>
          <div className="grid-2">
            {syllabusDesign.map((s, i) => (
              <div key={i} className="card">
                <h4 style={{color:'var(--blue)', marginBottom:12}}>{s.org}</h4>
                <ul className="syllabus-list">
                  {s.subjects.map((sub, j) => (
                    <li key={j}><BookOpen size={13}/>{sub}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-header">
                <span className="section-label">Academic Service</span>
                <h2>Board of Studies</h2>
                <div className="divider"/>
              </div>
              {boardOfStudies.map((b, i) => (
                <div key={i} className="card" style={{marginBottom:14, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8}}>
                  <strong style={{fontSize:'0.95rem'}}>{b.institution}</strong>
                  <span className="badge badge-blue">{b.period}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="section-header">
                <span className="section-label">Professional Development</span>
                <h2>MDP Participation</h2>
                <div className="divider"/>
              </div>
              {mdpParticipation.map((m, i) => (
                <div key={i} className="card mdp-card">
                  <h4 style={{fontSize:'0.9rem'}}>{m.title}</h4>
                  <p style={{fontSize:'0.83rem', color:'var(--blue-mid)', marginTop:4}}>{m.venue}</p>
                  <span className="badge badge-amber" style={{marginTop:6}}>{m.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .course-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; }
        .course-chip { background: var(--white); border: 1px solid var(--border); border-radius: var(--radius); padding: 12px 16px; display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--text-body); box-shadow: var(--shadow-sm); transition: all 0.2s; }
        .course-chip:hover { border-color: var(--blue); color: var(--blue); transform: translateY(-2px); }
        .course-chip svg { color: var(--blue); flex-shrink: 0; }
        .syllabus-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .syllabus-list li { display: flex; align-items: center; gap: 8px; font-size: 0.87rem; color: var(--text-body); }
        .syllabus-list svg { color: var(--accent); flex-shrink: 0; }
        .mdp-card { margin-bottom: 14px; }
      `}</style>
    </div>
  );
}