import React from 'react';
import { Crown } from 'lucide-react';
import { experience, adminRoles } from '../data/profileData';

export default function Experience() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Experience</span></div>
          <h1>Professional Experience</h1>
          <p>Academic Career & Employment History</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Career Journey</span>
            <h2>Employment History</h2>
            <div className="divider"/>
          </div>
          <div className="timeline">
            {experience.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className={`timeline-dot${e.type === 'current' ? ' current' : ''}`} />
                <div className="card exp-card">
                  <div className="exp-header">
                    <div>
                      <h4>{e.role}</h4>
                      <p className="exp-inst">{e.institution}</p>
                    </div>
                    <span className={`badge ${e.type === 'current' ? 'badge-green' : 'badge-blue'}`}>
                      {e.period}
                    </span>
                  </div>
                  {e.type === 'current' && (
                    <div className="current-tag">
                      <span className="badge badge-green">Current Position</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Leadership</span>
            <h2>Administrative Responsibilities</h2>
            <div className="divider"/>
          </div>
          <div className="grid-2">
            {adminRoles.map((r, i) => (
              <div key={i} className="card admin-card">
                <Crown size={20} className="admin-icon"/>
                <div>
                  <h4>{r.role}</h4>
                  {r.department && <p className="admin-dept">{r.department}</p>}
                  <p className="admin-inst">{r.institution}</p>
                  <span className="badge badge-amber" style={{marginTop:8}}>{r.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .exp-card { }
        .exp-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; }
        .exp-header h4 { font-size: 1rem; color: var(--text-dark); }
        .exp-inst { font-size: 0.88rem; color: var(--blue-mid); margin-top: 4px; }
        .current-tag { margin-top: 10px; }
        .admin-card { display: flex; gap: 16px; align-items: flex-start; }
        .admin-icon { color: var(--accent); flex-shrink: 0; margin-top: 3px; }
        .admin-card h4 { font-size: 0.95rem; color: var(--text-dark); }
        .admin-dept { font-size: 0.85rem; color: var(--text-muted); margin-top: 4px; }
        .admin-inst { font-size: 0.88rem; color: var(--blue-mid); font-weight: 500; margin-top: 4px; }
      `}</style>
    </div>
  );
}