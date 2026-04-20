import React from 'react';
import { Users, CheckCircle, Clock } from 'lucide-react';
import { researchGuides } from '../data/profileData';

export default function Guidance() {
  const awarded = researchGuides.filter(r => r.status === 'Awarded');
  const submitted = researchGuides.filter(r => r.status === 'Submitted');
  const phd = researchGuides.filter(r => r.level === 'Ph.D.');
  const mtech = researchGuides.filter(r => r.level === 'M.Tech');

  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Research Guidance</span></div>
          <h1>Research Guidance</h1>
          <p>M.Tech & Ph.D. Scholars Mentored</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Quick Stats */}
          <div className="grid-4" style={{ marginBottom: 48 }}>
            {[
              { num: researchGuides.length, label: 'Total Scholars', color: 'var(--blue)' },
              { num: phd.length, label: 'Ph.D. Scholars', color: '#7c3aed' },
              { num: mtech.length, label: 'M.Tech Scholars', color: 'var(--accent)' },
              { num: awarded.length, label: 'Degrees Awarded', color: '#16a34a' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-number" style={{ color: s.color }}>{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="section-header">
            <span className="section-label">Scholar Directory</span>
            <h2>Guided Scholars</h2>
            <div className="divider" />
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Level</th>
                  <th>Scholar Name</th>
                  <th>Year</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {researchGuides.map((r, i) => (
                  <tr key={i}>
                    <td style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{r.slNo}</td>
                    <td>
                      <span className={`badge ${r.level === 'Ph.D.' ? 'badge-blue' : 'badge-amber'}`}>
                        {r.level}
                      </span>
                    </td>
                    <td style={{ fontWeight: 500, color: 'var(--text-dark)' }}>{r.name}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{r.year}</td>
                    <td>
                      <span className={`status-chip ${r.status === 'Awarded' ? 'awarded' : 'submitted'}`}>
                        {r.status === 'Awarded' ? <CheckCircle size={13} /> : <Clock size={13} />}
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <style>{`
        .status-chip {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 600;
        }
        .status-chip.awarded { background: rgba(22,163,74,0.12); color: #16a34a; }
        .status-chip.submitted { background: rgba(234,179,8,0.12); color: #b45309; }
      `}</style>
    </div>
  );
}
