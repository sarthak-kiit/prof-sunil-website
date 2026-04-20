import React from 'react';
import { MapPin, Mic, Building } from 'lucide-react';
import { visitingFaculty, corporateTraining } from '../data/profileData';

export default function ResourcePerson() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Resource Person</span></div>
          <h1>Resource Person & Visiting Faculty</h1>
          <p>Corporate Training, Invited Talks & Visiting Faculty Engagements</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">External Engagements</span>
            <h2>Visiting Faculty</h2>
            <div className="divider" />
          </div>
          <div className="grid-2">
            {visitingFaculty.map((v, i) => (
              <div key={i} className="card vf-card">
                <div className="vf-icon"><Building size={20} /></div>
                <div>
                  <h4>{v.institution}</h4>
                  <span className="badge badge-blue" style={{ marginTop: 8 }}>{v.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industry Training</span>
            <h2>Corporate Training Programs</h2>
            <div className="divider" />
          </div>
          <div className="training-list">
            {corporateTraining.map((t, i) => (
              <div key={i} className="card training-card">
                <div className="training-icon"><Mic size={20} /></div>
                <div className="training-body">
                  <h4>{t.org}</h4>
                  <p>{t.program}</p>
                  {t.year && <span className="badge badge-amber" style={{ marginTop: 8 }}>{t.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .vf-card { display: flex; gap: 16px; align-items: flex-start; }
        .vf-icon { width: 42px; height: 42px; border-radius: 10px; background: rgba(37,99,168,0.1); color: var(--blue); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .vf-card h4 { font-size: 0.93rem; color: var(--text-dark); line-height: 1.4; }
        .training-list { display: flex; flex-direction: column; gap: 14px; }
        .training-card { display: flex; gap: 16px; align-items: flex-start; }
        .training-icon { width: 42px; height: 42px; border-radius: 10px; background: rgba(200,146,42,0.1); color: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .training-body h4 { font-size: 0.93rem; color: var(--text-dark); margin-bottom: 4px; }
        .training-body p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; }
      `}</style>
    </div>
  );
}
