import React from 'react';
import { Target, Lightbulb, BookOpen } from 'lucide-react';
import { profile, education } from '../data/profileData';

export default function About() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>About</span></div>
          <h1>About Prof. Sunil Kumar Dhal</h1>
          <p>Academic Profile & Professional Background</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-photo-col">
              <img src={profile.photo} alt={profile.name} className="about-photo" />
              <div className="about-quick-info card">
                <div className="info-row"><span>Designation</span><strong>Professor</strong></div>
                <div className="info-row"><span>Institution</span><strong>Sri Sri University</strong></div>
                <div className="info-row"><span>Location</span><strong>Cuttack, Odisha</strong></div>
                <div className="info-row"><span>Date of Birth</span><strong>{profile.dob}</strong></div>
                <div className="info-row"><span>Nationality</span><strong>{profile.nationality}</strong></div>
                <div className="info-row"><span>Email</span><strong style={{fontSize:'0.8rem'}}>{profile.email[0]}</strong></div>
              </div>
            </div>

            <div className="about-main-col">
              <div className="about-block">
                <span className="section-label">Biography</span>
                <h2>Academic Profile</h2>
                <div className="divider" style={{marginBottom:20}} />
                <p style={{marginBottom: 14}}>
                  Professor Sunil Kumar Dhal is a highly accomplished academician, researcher, and educator with over 
                  25 years of distinguished experience in higher education. Currently serving as Professor at the Faculty 
                  of Commerce and Management Studies, Sri Sri University, Cuttack, he has made significant contributions 
                  to the fields of Data Analytics, Cloud Computing, Enterprise Resource Planning, and Financial Engineering.
                </p>
                <p style={{marginBottom: 14}}>
                  He earned his Ph.D. in Computer Science from Utkal University in 2014 with a thesis on 
                  "Design of Computation Model on Value at Risk of Portfolios." His academic journey spans 
                  prestigious institutions across Odisha and Nepal, where he served in various capacities from 
                  Assistant Professor to Associate Professor and Professor.
                </p>
                <p>
                  As an author of 7 books published by leading publishers including Himalaya Publishing House and 
                  Alok Publication, and a contributor to 35+ peer-reviewed journals, he has been a prolific contributor 
                  to academic literature. His research has been published in Elsevier Procedia, IEEE, Springer, and 
                  other reputed international outlets.
                </p>
              </div>

              <div className="about-block">
                <Target size={20} className="block-icon"/>
                <h3>Career Objective</h3>
                <p style={{fontStyle:'italic', color:'var(--text-muted)', borderLeft:'3px solid var(--accent)', paddingLeft:16, marginTop:10}}>
                  "{profile.careerObjective}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Qualifications */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Credentials</span>
            <h2>Educational Qualifications</h2>
            <div className="divider" />
          </div>
          <div className="timeline">
            {education.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="card" style={{marginLeft:0}}>
                  <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8, marginBottom:6}}>
                    <h4 style={{fontSize:'1rem'}}>{e.degree}</h4>
                    <span className="badge badge-blue">{e.year}</span>
                  </div>
                  <p style={{color:'var(--blue-mid)', fontWeight:500, fontSize:'0.9rem'}}>{e.institution}</p>
                  <p style={{color:'var(--text-muted)', fontSize:'0.85rem', marginTop:4}}>{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card philosophy-card">
              <Lightbulb size={28} className="phil-icon"/>
              <h3>Teaching Philosophy</h3>
              <p>
                Prof. Dhal believes in bridging theoretical foundations with real-world applications. 
                His teaching approach integrates quantitative rigor with managerial relevance, 
                encouraging students to develop analytical thinking and data-driven decision-making skills. 
                He has designed curricula for multiple leading universities and continually updates course 
                content to reflect emerging industry trends.
              </p>
            </div>
            <div className="card philosophy-card">
              <BookOpen size={28} className="phil-icon"/>
              <h3>Research Philosophy</h3>
              <p>
                Driven by a commitment to impactful research, Prof. Dhal focuses on applied computational 
                and analytical methods to solve complex business and engineering problems. His interdisciplinary 
                approach spans cloud infrastructure, financial modeling, wireless sensor networks, and 
                machine learning—published in Elsevier, IEEE, Springer, and IGI Global outlets. 
                He actively mentors Ph.D. and M.Tech scholars toward academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-grid { display: grid; grid-template-columns: 280px 1fr; gap: 48px; align-items: start; }
        .about-photo { width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); margin-bottom: 20px; }
        .about-quick-info { padding: 20px; }
        .info-row { display: flex; flex-direction: column; padding: 8px 0; border-bottom: 1px solid var(--border); }
        .info-row:last-child { border-bottom: none; }
        .info-row span { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
        .info-row strong { font-size: 0.88rem; color: var(--text-dark); margin-top: 2px; }
        .about-block { margin-bottom: 36px; }
        .about-block h2 { font-size: 1.8rem; }
        .about-block h3 { margin-top: 8px; font-size: 1.2rem; }
        .block-icon { color: var(--blue); margin-bottom: 4px; }
        .philosophy-card { }
        .phil-icon { color: var(--accent); margin-bottom: 14px; }
        .philosophy-card h3 { margin-bottom: 12px; font-size: 1.15rem; }
        .philosophy-card p { font-size: 0.92rem; color: var(--text-body); line-height: 1.8; }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}