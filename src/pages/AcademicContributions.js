import React from 'react';
import { PenLine, Users, Globe, CheckCircle } from 'lucide-react';
import { syllabusDesign, boardOfStudies } from '../data/profileData';

const conferencePapers = [
  { title: "Genetic Algorithm Optimization for Finance and Investment", venue: "National Seminar on Recent Trends in ICT, Bhubaneswar", type: "National", year: 2005 },
  { title: "A Model of E-Factory for Software Manufacturers", venue: "National Seminar on Recent Trends in ICT, Bhubaneswar", type: "National", year: 2005 },
  { title: "Evaluation of HRM Policy Using Software Tool", venue: "National Seminar, ICFAI, Bhubaneswar", type: "National", year: 2006 },
  { title: "Financial Time Series Modeling with Random Iterated Neural Network and Lazy Learning", venue: "National Conference on Data Mining and its Applications, Bhubaneswar", type: "National", year: 2008 },
  { title: "E-Business Platform for Indian Agriculture Market", venue: "4th International AIB-India Annual International Conference, India Chapter", type: "International", year: 2006 },
  { title: "Enterprise Resource Planning: A Prospective to New Industrial Business", venue: "International Seminar on Management Colloquium-2008, RCM", type: "International", year: 2008 },
  { title: "Formal Analysis of Virtual Machine Migration in Cloud Infrastructure", venue: "IEEE Symposium on Emerging Topics in Computing and Communication", type: "International", year: 2015 },
];

export default function AcademicContributions() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Academic Contributions</span></div>
          <h1>Academic Contributions</h1>
          <p>Syllabus Design, Board of Studies & Conference Presentations</p>
        </div>
      </div>

      {/* Conference Papers */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Conference Presentations</span>
            <h2>Papers Presented</h2>
            <div className="divider" />
          </div>
          <div className="conf-list">
            {conferencePapers.map((c, i) => (
              <div key={i} className="card conf-card">
                <div className="conf-left">
                  <Globe size={18} />
                </div>
                <div className="conf-body">
                  <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                    <span className={`badge ${c.type === 'International' ? 'badge-blue' : 'badge-amber'}`}>{c.type}</span>
                    <span className="badge badge-green">{c.year}</span>
                  </div>
                  <h4>{c.title}</h4>
                  <p className="conf-venue">{c.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Design */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Curriculum</span>
            <h2>Syllabus Design Contributions</h2>
            <div className="divider" />
          </div>
          <div className="grid-2">
            {syllabusDesign.map((s, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                  <PenLine size={18} style={{ color: 'var(--blue)' }} />
                  <h4 style={{ fontSize: '0.93rem', color: 'var(--blue)' }}>{s.org}</h4>
                </div>
                <ul className="contrib-list">
                  {s.subjects.map((sub, j) => (
                    <li key={j}><CheckCircle size={13} />{sub}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Studies */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Academic Governance</span>
            <h2>Board of Studies Memberships</h2>
            <div className="divider" />
          </div>
          <div className="grid-2">
            {boardOfStudies.map((b, i) => (
              <div key={i} className="card bos-card">
                <Users size={22} className="bos-icon" />
                <div>
                  <h4>{b.institution}</h4>
                  <span className="badge badge-blue" style={{ marginTop: 8 }}>{b.period}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="card contrib-note" style={{ marginTop: 32 }}>
            <h4>Conference Organisation</h4>
            <p>
              Prof. Dhal organised a conference titled <em>"Financial Engineering and its Implication"</em> at Hotel Presidency, Bhubaneswar (June 10, 2006), 
              and delivered a keynote talk on <em>"Big Data and Hadoop"</em> at GMRIT, Srikakulam (December 17–18, 2014). 
              He has actively contributed to national and international academic discourse through paper presentations,
              conference chairing, and institutional committee roles throughout his career.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .conf-list { display: flex; flex-direction: column; gap: 14px; }
        .conf-card { display: flex; gap: 16px; align-items: flex-start; }
        .conf-left { width: 38px; height: 38px; border-radius: 10px; background: rgba(37,99,168,0.1); color: var(--blue); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .conf-body h4 { font-size: 0.92rem; color: var(--text-dark); line-height: 1.5; margin-bottom: 4px; }
        .conf-venue { font-size: 0.82rem; color: var(--text-muted); font-style: italic; }
        .contrib-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .contrib-list li { display: flex; align-items: center; gap: 8px; font-size: 0.86rem; color: var(--text-body); }
        .contrib-list svg { color: var(--blue); flex-shrink: 0; }
        .bos-card { display: flex; gap: 16px; align-items: flex-start; }
        .bos-icon { color: var(--accent); flex-shrink: 0; margin-top: 3px; }
        .bos-card h4 { font-size: 0.95rem; color: var(--text-dark); }
        .contrib-note { background: var(--cream-dark); border-left: 4px solid var(--accent); }
        .contrib-note h4 { color: var(--blue); margin-bottom: 10px; }
        .contrib-note p { font-size: 0.9rem; color: var(--text-body); line-height: 1.8; }
      `}</style>
    </div>
  );
}
