import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Books from './pages/Books';
import Teaching from './pages/Teaching';
import Awards from './pages/Awards';
import Editorial from './pages/Editorial';
import Guidance from './pages/Guidance';
import Consultancy from './pages/Consultancy';
import ResourcePerson from './pages/ResourcePerson';
import AcademicContributions from './pages/AcademicContributions';
import CV from './pages/CV';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner({ darkMode, setDarkMode }) {
  return (
    <>
      <ScrollToTop />
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/books" element={<Books />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/resource-person" element={<ResourcePerson />} />
          <Route path="/academic-contributions" element={<AcademicContributions />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router>
      <AppInner darkMode={darkMode} setDarkMode={setDarkMode} />
    </Router>
  );
}
