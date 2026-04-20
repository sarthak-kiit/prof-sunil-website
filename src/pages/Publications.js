import React, { useState, useMemo } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { publications } from '../data/profileData';

const categories = ['All', 'Journal', 'Conference'];
const years = ['All', ...Array.from(new Set(publications.map(p => p.year))).sort((a,b) => b-a)];

export default function Publications() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [year, setYear] = useState('All');

  const filtered = useMemo(() => publications.filter(p => {
    const q = query.toLowerCase();
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.journal.toLowerCase().includes(q);
    const matchC = category === 'All' || p.category === category;
    const matchY = year === 'All' || p.year === parseInt(year);
    return matchQ && matchC && matchY;
  }), [query, category, year]);

  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Publications</span></div>
          <h1>Research Publications</h1>
          <p>Peer-Reviewed Journals & Conference Papers</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Stats row */}
          <div className="pub-stats">
            <div className="pub-stat"><strong>{publications.length}</strong><span>Total Publications</span></div>
            <div className="pub-stat"><strong>{publications.filter(p=>p.category==='Journal').length}</strong><span>Journal Articles</span></div>
            <div className="pub-stat"><strong>{publications.filter(p=>p.category==='Conference').length}</strong><span>Conference Papers</span></div>
            <div className="pub-stat"><strong>{publications.filter(p=>p.journal.includes('Elsevier')).length}</strong><span>Elsevier Publications</span></div>
          </div>

          {/* Filters */}
          <div className="pub-filters card">
            <div className="search-wrap">
              <Search size={16}/>
              <input
                type="text"
                placeholder="Search by title or journal..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
            <div className="filter-group">
              {categories.map(c => (
                <button key={c} className={`filter-btn${category===c?' active':''}`} onClick={() => setCategory(c)}>{c}</button>
              ))}
            </div>
            <select value={year} onChange={e => setYear(e.target.value)} className="year-select">
              {years.map(y => <option key={y}>{y}</option>)}
            </select>
          </div>

          <p className="result-count">Showing {filtered.length} of {publications.length} publications</p>

          <div className="pub-list">
            {filtered.map((p, i) => (
              <div key={i} className="card pub-item">
                <div className="pub-item-left">
                  <div className="pub-num">{i + 1}</div>
                </div>
                <div className="pub-item-right">
                  <div style={{display:'flex', gap:8, marginBottom:8, flexWrap:'wrap'}}>
                    <span className={`badge ${p.category==='Journal'?'badge-blue':'badge-amber'}`}>{p.category}</span>
                    <span className="badge badge-green">{p.year}</span>
                  </div>
                  <h4 className="pub-item-title">{p.title}</h4>
                  <p className="pub-item-journal">{p.journal}</p>
                  {p.volume && <p className="pub-item-vol">{p.volume}</p>}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-results">
              <BookOpen size={40}/>
              <p>No publications found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .pub-stats { display: flex; gap: 20px; margin-bottom: 28px; flex-wrap: wrap; }
        .pub-stat { background: var(--white); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px 24px; text-align: center; flex: 1; min-width: 120px; }
        .pub-stat strong { display: block; font-size: 1.8rem; font-family: var(--font-display); color: var(--blue); }
        .pub-stat span { font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
        .pub-filters { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; padding: 20px 24px; margin-bottom: 20px; }
        .search-wrap { display: flex; align-items: center; gap: 10px; background: var(--cream); border: 1px solid var(--border); border-radius: 6px; padding: 8px 14px; flex: 1; min-width: 200px; }
        .search-wrap svg { color: var(--text-muted); flex-shrink: 0; }
        .search-wrap input { background: none; border: none; outline: none; font-size: 0.9rem; color: var(--text-body); width: 100%; font-family: var(--font-sans); }
        .filter-group { display: flex; gap: 6px; }
        .filter-btn { padding: 7px 14px; border-radius: 20px; border: 1px solid var(--border); background: none; font-size: 0.82rem; cursor: pointer; color: var(--text-muted); font-family: var(--font-sans); transition: all 0.2s; }
        .filter-btn.active, .filter-btn:hover { background: var(--blue); color: white; border-color: var(--blue); }
        .year-select { padding: 7px 12px; border-radius: 6px; border: 1px solid var(--border); background: var(--cream); font-size: 0.85rem; color: var(--text-body); font-family: var(--font-sans); cursor: pointer; }
        .result-count { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px; }
        .pub-list { display: flex; flex-direction: column; gap: 14px; }
        .pub-item { display: flex; gap: 16px; align-items: flex-start; padding: 20px 24px; }
        .pub-num { width: 32px; height: 32px; border-radius: 50%; background: var(--cream-dark); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 600; color: var(--text-muted); flex-shrink: 0; margin-top: 2px; }
        .pub-item-right { flex: 1; }
        .pub-item-title { font-family: var(--font-serif); font-size: 0.95rem; color: var(--text-dark); line-height: 1.5; margin-bottom: 6px; }
        .pub-item-journal { font-size: 0.85rem; color: var(--blue-mid); font-style: italic; }
        .pub-item-vol { font-size: 0.8rem; color: var(--text-muted); margin-top: 3px; }
        .no-results { text-align: center; padding: 60px; color: var(--text-muted); }
        .no-results svg { margin: 0 auto 12px; display: block; opacity: 0.3; }
      `}</style>
    </div>
  );
}