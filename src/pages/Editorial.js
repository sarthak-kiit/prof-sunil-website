import React from 'react';
import { FileEdit } from 'lucide-react';
import { editorialRoles } from '../data/profileData';

export default function Editorial() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Editorial Roles</span></div>
          <h1>Editorial Board Memberships</h1>
          <p>Academic Review & Journal Editorial Responsibilities</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Academic Service</span>
            <h2>Editorial Board Member</h2>
            <div className="divider" />
            <p style={{ marginTop: 12, maxWidth: 600 }}>
              Prof. Dhal serves on the editorial boards of prestigious national and international journals,
              contributing his expertise in data analytics, cloud computing, and management information systems.
            </p>
          </div>

          <div className="grid-2">
            {editorialRoles.map((r, i) => (
              <div key={i} className="card editorial-card">
                <div className="editorial-icon">
                  <FileEdit size={24} />
                </div>
                <div className="editorial-body">
                  <h3>{r.journal}</h3>
                  <p className="editorial-role">{r.role}</p>
                  <p className="editorial-publisher">{r.publisher}</p>
                  <div className="editorial-meta">
                    <span className="badge badge-blue">{r.issn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="editorial-note card" style={{ marginTop: 40 }}>
            <h4>Reviewing Activities</h4>
            <p>
              In addition to editorial board memberships, Prof. Dhal actively reviews manuscripts for
              several international journals in the areas of computer science, management, analytics, and
              engineering. His peer-review contributions help maintain the quality and rigor of academic publishing
              in his fields of expertise.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .editorial-card { display: flex; gap: 20px; align-items: flex-start; }
        .editorial-icon {
          width: 52px; height: 52px; border-radius: 12px;
          background: linear-gradient(135deg, var(--blue), var(--blue-light));
          display: flex; align-items: center; justify-content: center;
          color: white; flex-shrink: 0;
        }
        .editorial-body { flex: 1; }
        .editorial-body h3 { font-size: 0.98rem; color: var(--text-dark); margin-bottom: 4px; line-height: 1.4; }
        .editorial-role { font-size: 0.82rem; font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
        .editorial-publisher { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 10px; }
        .editorial-meta { }
        .editorial-note { background: var(--cream-dark); border-left: 4px solid var(--blue); }
        .editorial-note h4 { margin-bottom: 10px; color: var(--blue); }
        .editorial-note p { font-size: 0.92rem; color: var(--text-body); line-height: 1.8; }
      `}</style>
    </div>
  );
}