import React from 'react';
import { BookOpen, BookMarked } from 'lucide-react';
import { books, bookChapters } from '../data/profileData';

export default function Books() {
  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Books</span></div>
          <h1>Books & Book Chapters</h1>
          <p>Authored Textbooks, Reference Books, and Book Chapter Contributions</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Authored Works</span>
            <h2>Published Books</h2>
            <div className="divider"/>
          </div>
          <div className="grid-3">
            {books.map((b, i) => (
              <div key={i} className="card book-card">
                <div className="book-spine" />
                <div className="book-content">
                  <BookOpen size={22} className="book-icon"/>
                  <span className="badge badge-amber" style={{marginBottom:10}}>{b.type}</span>
                  <h4>{b.title}</h4>
                  <p className="book-publisher">{b.publisher}</p>
                  <span className="book-year">{b.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Contributions</span>
            <h2>Book Chapters</h2>
            <div className="divider"/>
          </div>
          <div className="grid-2">
            {bookChapters.map((c, i) => (
              <div key={i} className="card" style={{display:'flex', gap:16, alignItems:'flex-start'}}>
                <BookMarked size={20} style={{color:'var(--accent)', flexShrink:0, marginTop:4}}/>
                <div>
                  <h4 style={{fontSize:'0.95rem'}}>{c.title}</h4>
                  <p style={{fontSize:'0.85rem', color:'var(--text-muted)', marginTop:4}}>{c.book}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .book-card { position: relative; overflow: hidden; padding: 0; }
        .book-spine { width: 8px; background: var(--blue); position: absolute; left: 0; top: 0; bottom: 0; }
        .book-content { padding: 24px 24px 24px 28px; display: flex; flex-direction: column; gap: 6px; }
        .book-icon { color: var(--blue); margin-bottom: 4px; }
        .book-card h4 { font-family: var(--font-serif); font-size: 0.95rem; color: var(--text-dark); line-height: 1.5; }
        .book-publisher { font-size: 0.83rem; color: var(--text-muted); font-style: italic; }
        .book-year { font-size: 0.8rem; font-weight: 700; color: var(--accent); }
      `}</style>
    </div>
  );
}
