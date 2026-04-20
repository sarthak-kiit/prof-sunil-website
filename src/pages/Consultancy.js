import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { consultancy } from '../data/profileData';

export default function Consultancy() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Consultancy</span></div>
          <h1>Consultancy Projects</h1>
          <p>Applied Research & Industry Consulting Engagements</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industry Engagement</span>
            <h2>Consulting Work</h2>
            <div className="divider" />
            <p style={{ marginTop: 12, maxWidth: 620 }}>
              Prof. Dhal has undertaken several significant consultancy projects for government and
              corporate organisations, applying academic research to real-world development and assessment challenges.
            </p>
          </div>

          <div className="consultancy-list">
            {consultancy.map((c, i) => (
              <div key={i} className="card consultancy-card">
                <div className="consultancy-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="consultancy-body">
                  <h3>{c.title}</h3>
                  <div className="consultancy-meta">
                    <span className="meta-item">
                      <Building2 size={14} />
                      {c.client}
                    </span>
                    <span className="meta-item">
                      <Calendar size={14} />
                      Started: {c.start}
                    </span>
                    <span className="badge badge-blue">{c.duration}</span>
                  </div>
                </div>
                <div className="consultancy-icon">
                  <Briefcase size={22} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .consultancy-list { display: flex; flex-direction: column; gap: 18px; }
        .consultancy-card { display: flex; gap: 24px; align-items: flex-start; }
        .consultancy-num {
          font-family: var(--font-display); font-size: 2rem; font-weight: 700;
          color: var(--border); line-height: 1; flex-shrink: 0; width: 44px;
        }
        .consultancy-body { flex: 1; }
        .consultancy-body h3 { font-size: 1rem; color: var(--text-dark); margin-bottom: 12px; line-height: 1.5; }
        .consultancy-meta { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
        .meta-item { display: flex; align-items: center; gap: 6px; font-size: 0.83rem; color: var(--text-muted); }
        .meta-item svg { color: var(--blue); flex-shrink: 0; }
        .consultancy-icon { color: var(--accent); flex-shrink: 0; opacity: 0.5; margin-top: 4px; }
      `}</style>
    </div>
  );
}
