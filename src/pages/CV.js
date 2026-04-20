import React from 'react';
import { FileText, Download, ExternalLink, GraduationCap, BookOpen, Award, Users } from 'lucide-react';
import { profile } from '../data/profileData';

export default function CV() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>CV</span></div>
          <h1>Curriculum Vitae</h1>
          <p>Full Academic & Professional Profile Document</p>
        </div>
      </div>

      <section className="section">
        <div className="container cv-layout">
          {/* CV Preview Card */}
          <div className="cv-preview-card card">
            <div className="cv-doc-header">
              <div className="cv-doc-icon"><FileText size={40} /></div>
              <div>
                <h2>{profile.name}</h2>
                <p>{profile.designation} · {profile.institution}</p>
                <p className="cv-qual">{profile.qualifications}</p>
              </div>
            </div>

            <div className="cv-divider" />

            <div className="cv-sections-preview">
              {[
                { icon: <GraduationCap size={16}/>, label: 'Education & Qualifications' },
                { icon: <Users size={16}/>, label: 'Employment History (25+ Years)' },
                { icon: <BookOpen size={16}/>, label: '35+ Research Publications' },
                { icon: <FileText size={16}/>, label: '7 Authored Books' },
                { icon: <Award size={16}/>, label: '5 Awards & Honours' },
                { icon: <Users size={16}/>, label: '10 Research Scholars Guided' },
                { icon: <FileText size={16}/>, label: 'Consultancy & Industry Projects' },
                { icon: <GraduationCap size={16}/>, label: 'Editorial Board Memberships' },
              ].map((s, i) => (
                <div key={i} className="cv-section-item">
                  <div className="cv-check">{s.icon}</div>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="cv-actions">
              <a
                href="/sunil-cv.pdf"
                download
                className="btn btn-primary"
                onClick={e => { e.preventDefault(); alert('CV PDF will be available once hosted. Please replace /sunil-cv.pdf with actual CV file path.'); }}
              >
                <Download size={16} /> Download CV (PDF)
              </a>
              <a
                href={profile.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <ExternalLink size={16} /> Google Scholar Profile
              </a>
            </div>

            <p className="cv-note">
              📌 To add the actual CV file: place your PDF at <code>public/sunil-cv.pdf</code> and update the download link above.
            </p>
          </div>

          {/* Side Info */}
          <div className="cv-sidebar">
            <div className="card cv-contact-card">
              <h4>Contact Information</h4>
              <div className="cv-info-list">
                {profile.email.map((e, i) => (
                  <div key={i} className="cv-info-row">
                    <span className="cv-info-label">Email {i+1}</span>
                    <a href={`mailto:${e}`}>{e}</a>
                  </div>
                ))}
                <div className="cv-info-row">
                  <span className="cv-info-label">Phone</span>
                  <span>{profile.phone}</span>
                </div>
                <div className="cv-info-row">
                  <span className="cv-info-label">Institution</span>
                  <span>{profile.institution}</span>
                </div>
              </div>
            </div>

            <div className="card cv-links-card">
              <h4>Academic Profiles</h4>
              <a href={profile.googleScholar} target="_blank" rel="noreferrer" className="cv-ext-link">
                <ExternalLink size={14}/> Google Scholar
              </a>
              <a href="https://researchgate.net" target="_blank" rel="noreferrer" className="cv-ext-link">
                <ExternalLink size={14}/> ResearchGate <span className="badge badge-amber" style={{fontSize:'0.7rem'}}>Add Link</span>
              </a>
              <a href="https://researchgate.net" target="_blank" rel="noreferrer" className="cv-ext-link">
                <ExternalLink size={14}/> LinkedIn <span className="badge badge-amber" style={{fontSize:'0.7rem'}}>Add Link</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .cv-layout { display: grid; grid-template-columns: 1fr 300px; gap: 32px; align-items: start; }
        .cv-preview-card { padding: 36px; }
        .cv-doc-header { display: flex; gap: 24px; align-items: flex-start; margin-bottom: 24px; }
        .cv-doc-icon { width: 72px; height: 72px; border-radius: 16px; background: linear-gradient(135deg, var(--blue), var(--blue-light)); color: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .cv-doc-header h2 { font-size: 1.4rem; margin-bottom: 4px; }
        .cv-doc-header p { font-size: 0.88rem; color: var(--text-muted); }
        .cv-qual { font-size: 0.78rem !important; color: var(--text-muted) !important; margin-top: 4px; }
        .cv-divider { height: 1px; background: var(--border); margin-bottom: 24px; }
        .cv-sections-preview { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 28px; }
        .cv-section-item { display: flex; align-items: center; gap: 10px; font-size: 0.88rem; color: var(--text-body); padding: 8px 12px; background: var(--cream-dark); border-radius: 6px; }
        .cv-check { color: var(--blue); flex-shrink: 0; }
        .cv-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 20px; }
        .cv-note { font-size: 0.82rem; color: var(--text-muted); background: var(--cream-dark); padding: 12px 16px; border-radius: 6px; border-left: 3px solid var(--accent); }
        .cv-note code { font-size: 0.8rem; background: rgba(0,0,0,0.08); padding: 2px 6px; border-radius: 4px; }
        .cv-contact-card { margin-bottom: 20px; }
        .cv-contact-card h4, .cv-links-card h4 { font-size: 0.88rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 16px; font-family: var(--font-sans); }
        .cv-info-list { display: flex; flex-direction: column; gap: 12px; }
        .cv-info-row { display: flex; flex-direction: column; gap: 2px; padding-bottom: 10px; border-bottom: 1px solid var(--border); }
        .cv-info-row:last-child { border-bottom: none; }
        .cv-info-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted); font-weight: 600; }
        .cv-info-row span, .cv-info-row a { font-size: 0.86rem; color: var(--text-dark); word-break: break-all; }
        .cv-ext-link { display: flex; align-items: center; gap: 8px; font-size: 0.88rem; color: var(--blue); padding: 8px 0; border-bottom: 1px solid var(--border); }
        .cv-ext-link:last-child { border-bottom: none; }
        .cv-ext-link:hover { color: var(--accent); }
        @media (max-width: 768px) { .cv-layout { grid-template-columns: 1fr; } .cv-sections-preview { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}