import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle } from 'lucide-react';
import { profile } from '../data/profileData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const mailto = `mailto:${profile.email[0]}?subject=${encodeURIComponent(form.subject || 'Website Enquiry – ' + form.name)}&body=${encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="page-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">Home / <span>Contact</span></div>
          <h1>Contact</h1>
          <p>Get in Touch for Academic Collaboration, Research Enquiries & More</p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-layout">
          {/* Form */}
          <div className="contact-form-col">
            <div className="section-header">
              <span className="section-label">Get in Touch</span>
              <h2>Send a Message</h2>
              <div className="divider" />
            </div>

            {sent && (
              <div className="sent-banner">
                <CheckCircle size={18}/> Message opened in your email client. Thank you!
              </div>
            )}

            <div className="contact-form card">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Nature of enquiry" />
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Write your message here..." />
              </div>
              <button className="btn btn-primary" onClick={handleSubmit} style={{width:'100%', justifyContent:'center'}}>
                <Send size={16}/> Send Message
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="contact-info-col">
            <div className="card contact-info-card">
              <h4>Contact Information</h4>
              <div className="contact-item">
                <div className="contact-item-icon"><Mail size={18}/></div>
                <div>
                  <span className="contact-item-label">Email</span>
                  {profile.email.map((e, i) => (
                    <a key={i} href={`mailto:${e}`} className="contact-item-val">{e}</a>
                  ))}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><Phone size={18}/></div>
                <div>
                  <span className="contact-item-label">Phone</span>
                  <a href={`tel:${profile.phone}`} className="contact-item-val">{profile.phone}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><MapPin size={18}/></div>
                <div>
                  <span className="contact-item-label">Address</span>
                  <span className="contact-item-val">Faculty of Commerce & Management Studies</span>
                  <span className="contact-item-val">Sri Sri University, Godisahi</span>
                  <span className="contact-item-val">Cuttack, Odisha, India</span>
                </div>
              </div>
            </div>

            <div className="card contact-links-card" style={{ marginTop: 20 }}>
              <h4>Academic Profiles</h4>
              <a href={profile.googleScholar} target="_blank" rel="noreferrer" className="profile-link">
                <div className="profile-link-icon scholar">G</div>
                <div>
                  <strong>Google Scholar</strong>
                  <span>View publications & citations</span>
                </div>
                <ExternalLink size={14}/>
              </a>
              <a href="https://researchgate.net" target="_blank" rel="noreferrer" className="profile-link">
                <div className="profile-link-icon rg">R</div>
                <div>
                  <strong>ResearchGate</strong>
                  <span>Add your profile link</span>
                </div>
                <ExternalLink size={14}/>
              </a>
              <a href="https://researchgate.net" target="_blank" rel="noreferrer" className="profile-link">
                <div className="profile-link-icon li">in</div>
                <div>
                  <strong>LinkedIn</strong>
                  <span>Add your profile link</span>
                </div>
                <ExternalLink size={14}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-layout { display: grid; grid-template-columns: 1fr 340px; gap: 40px; align-items: start; }
        .contact-form { padding: 32px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
        .form-group label { font-size: 0.82rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
        .form-group input, .form-group textarea {
          padding: 11px 14px; border-radius: 6px;
          border: 1.5px solid var(--border); background: var(--cream);
          font-size: 0.9rem; color: var(--text-body); font-family: var(--font-sans);
          transition: border-color 0.2s; resize: vertical;
        }
        .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--blue); }
        .sent-banner { background: rgba(22,163,74,0.1); color: #16a34a; border: 1px solid rgba(22,163,74,0.3); border-radius: 8px; padding: 12px 16px; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; margin-bottom: 20px; }
        .contact-info-card h4, .contact-links-card h4 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-muted); margin-bottom: 20px; font-family: var(--font-sans); }
        .contact-item { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
        .contact-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .contact-item-icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(37,99,168,0.1); color: var(--blue); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .contact-item-label { display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; }
        .contact-item-val { display: block; font-size: 0.88rem; color: var(--text-dark); margin-bottom: 2px; }
        a.contact-item-val { color: var(--blue); }
        a.contact-item-val:hover { color: var(--accent); }
        .profile-link { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border); text-decoration: none; color: var(--text-body); transition: color 0.2s; }
        .profile-link:last-child { border-bottom: none; }
        .profile-link:hover { color: var(--blue); }
        .profile-link-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.9rem; flex-shrink: 0; }
        .profile-link-icon.scholar { background: #4285f4; color: white; }
        .profile-link-icon.rg { background: #00d0af; color: white; }
        .profile-link-icon.li { background: #0a66c2; color: white; }
        .profile-link > div { flex: 1; }
        .profile-link strong { display: block; font-size: 0.88rem; }
        .profile-link span { font-size: 0.78rem; color: var(--text-muted); }
        .profile-link svg { color: var(--text-muted); flex-shrink: 0; }
        @media (max-width: 768px) { .contact-layout { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}