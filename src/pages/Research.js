import React from 'react';
import { FlaskConical, TrendingUp, Cloud, Database, Wifi, BarChart2, BrainCircuit } from 'lucide-react';
import { research } from '../data/profileData';

const researchCards = [
  { title: 'Data & Business Analytics', desc: 'Predictive modelling, multivariate analysis, and data-driven decision frameworks for managerial applications.', icon: <BarChart2 size={28}/>, color: '#1a4f82' },
  { title: 'Cloud Computing', desc: 'VM migration, security models, cloud infrastructure analysis, and federated cloud service provider selection.', icon: <Cloud size={28}/>, color: '#2563a8' },
  { title: 'Enterprise Resource Planning', desc: 'ERP systems, SAP, business process integration, and digital transformation strategies.', icon: <Database size={28}/>, color: '#c8922a' },
  { title: 'Machine Learning', desc: 'Neural networks, SVM, genetic algorithms, and AI-based solutions for finance and industry.', icon: <BrainCircuit size={28}/>, color: '#16a34a' },
  { title: 'Decision Support Systems', desc: 'Computational models for value at risk, portfolio optimization, and quantitative decision-making.', icon: <TrendingUp size={28}/>, color: '#7c3aed' },
  { title: 'Wireless Sensor Networks', desc: 'Energy-efficient routing, hierarchical management models, and neural network-enabled WSN infrastructure.', icon: <Wifi size={28}/>, color: '#dc2626' },
];

export default function Research() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Research</span></div>
          <h1>Research Profile</h1>
          <p>Primary Fields of Interest & Academic Research Domains</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Focus Areas</span>
            <h2>Primary Research Domains</h2>
            <div className="divider"/>
          </div>
          <div className="grid-3">
            {researchCards.map((r, i) => (
              <div key={i} className="card research-domain-card">
                <div className="rd-icon" style={{color: r.color, background: r.color+'18'}}>{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Interests</span>
            <h2>Secondary Research Areas</h2>
            <div className="divider"/>
          </div>
          <div style={{display:'flex', flexWrap:'wrap', gap:14, marginTop:20}}>
            {research.secondary.map((r, i) => (
              <div key={i} className="interest-chip">
                <FlaskConical size={14}/>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .research-domain-card { text-align: center; padding: 36px 24px; }
        .rd-icon { display: inline-flex; padding: 16px; border-radius: 50%; margin-bottom: 18px; }
        .research-domain-card h3 { font-size: 1.05rem; margin-bottom: 10px; }
        .research-domain-card p { font-size: 0.88rem; color: var(--text-muted); line-height: 1.7; }
        .interest-chip {
          display: flex; align-items: center; gap: 8px;
          background: var(--white); border: 1px solid var(--border);
          padding: 10px 18px; border-radius: 24px;
          font-size: 0.88rem; color: var(--text-body);
          box-shadow: var(--shadow-sm);
        }
        .interest-chip svg { color: var(--blue); }
      `}</style>
    </div>
  );
}