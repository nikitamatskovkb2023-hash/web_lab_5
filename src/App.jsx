import { useState, useEffect } from 'react';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-flex">
          <span style={{fontWeight: '700', color: 'var(--text-h)'}}>Нікіта Мацьков</span>
          <ul className="nav-links">
            <li><a href="#about">Про мене</a></li>
            <li><a href="#edu">Освіта</a></li>
            <li><a href="#skills">Навички</a></li>
            <li><a href="#reviews">Відгуки</a></li>
          </ul>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Темна' : '☀️ Світла'}
          </button>
        </div>
      </nav>

      <main className="container" style={{paddingTop: '40px'}}>
        {/* Шапка */}
        <section className="card">
          <h1>Нікіта <span className="accent-text">Мацьков</span></h1>
          <div className="subtitle">Студент спеціальності "Кібербезпека", група КБ-307</div>
          <div style={{marginTop: '12px', borderTop: '1px solid var(--border)', paddingTop: '12px', fontSize: '14px'}}>
            <p>📧 nikita.matskov.kb.2023@lpnu.ua</p>
            <p>📍 Львів, Україна</p>
          </div>
        </section>

        {/* Про мене */}
        <section id="about" className="card">
          <h2>Про мене</h2>
          <p style={{fontSize: '14px'}}>Я студент Національного університету "Львівська політехніка", який активно вивчає веб-розробку, кібербезпеку та сучасні інформаційні технології. Маю базові знання у створенні веб-додатків, роботі з базами даних та аналізі мережевого трафіку.</p>
        </section>

        {/* Освіта */}
        <section id="edu" className="card">
          <h2>Освіта</h2>
          <p style={{fontSize: '14px'}}><strong>Національний університет "Львівська політехніка"</strong></p>
          <p style={{fontSize: '14px'}}>Спеціальність: Кібербезпека</p>
          <p style={{fontSize: '14px'}}>Рік вступу: 2023</p>
        </section>

        {/* Навички */}
        <section id="skills" className="card">
          <h2>Навички</h2>
          <div className="skills-list">
            <span className="skill-tag">HTML/CSS</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">Wireshark</span>
            <span className="skill-tag">Git</span>
          </div>
        </section>

        {/* Досвід та Проєкти */}
        <section className="card">
          <h2>Досвід та Проєкти</h2>
          <p style={{fontSize: '14px', marginBottom: '10px'}}>У рамках навчання розробляв веб-додатки з використанням HTML, CSS та React. Працював із базами даних (CRUD-операції).</p>
          <p style={{fontSize: '14px'}}><strong>Проєкт:</strong> Веб-додаток для управління БД (пошук, редагування, видалення записів).</p>
        </section>

        {/* Відгуки */}
        <section id="reviews">
          <Reviews />
        </section>

        {/* Системна інфа */}
        <section id="system">
          <Footer />
        </section>

        <footer className="footer">
          <p>© 2025 Нікіта Мацьков</p>
        </footer>
      </main>
    </div>
  );
}

export default App;