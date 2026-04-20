import React from 'react';
import { Award, Star } from 'lucide-react';
import { awards } from '../data/profileData';

export default function Awards() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Awards</span></div>
          <h1>Awards & Honours</h1>
          <p>Academic Recognitions, Distinctions & Achievements</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Recognition</span>
            <h2>Awards Received</h2>
            <div className="divider" />
          </div>

          <div className="awards-timeline">
            {awards.map((a, i) => (
              <div key={i} className="award-timeline-item">
                <div className="award-year-col">
                  <div className="award-year-badge">{a.year}</div>
                </div>
                <div className="award-connector">
                  <div className="award-dot"><Award size={14} /></div>
                  <div className="award-line" />
                </div>
                <div className="card award-detail-card">
                  <div className="award-header">
                    <Star size={18} className="award-star" />
                    <h3>{a.title}</h3>
                  </div>
                  <p className="award-desc-text">{a.desc}</p>
                  <div className="award-venue-row">
                    <span className="badge badge-amber">{a.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .awards-timeline { display: flex; flex-direction: column; gap: 24px; }
        .award-timeline-item { display: grid; grid-template-columns: 80px 48px 1fr; gap: 0; align-items: flex-start; }
        .award-year-col { display: flex; justify-content: flex-end; padding-top: 18px; }
        .award-year-badge {
          background: var(--blue); color: white;
          font-family: var(--font-display); font-size: 1rem; font-weight: 700;
          padding: 6px 12px; border-radius: 6px; white-space: nowrap;
        }
        .award-connector { display: flex; flex-direction: column; align-items: center; padding-top: 18px; }
        .award-dot {
          width: 34px; height: 34px; border-radius: 50%;
          background: var(--accent); color: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 0 4px rgba(200,146,42,0.18);
          flex-shrink: 0; z-index: 1;
        }
        .award-line { flex: 1; width: 2px; background: var(--border); margin-top: 6px; }
        .award-timeline-item:last-child .award-line { display: none; }
        .award-detail-card { margin-left: 12px; }
        .award-header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .award-star { color: var(--accent); flex-shrink: 0; }
        .award-header h3 { font-size: 1.05rem; color: var(--text-dark); }
        .award-desc-text { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.7; }
        .award-venue-row { }
        @media (max-width: 600px) {
          .award-timeline-item { grid-template-columns: 60px 36px 1fr; }
          .award-year-badge { font-size: 0.82rem; padding: 4px 8px; }
        }
      `}</style>
    </div>
  );
}
