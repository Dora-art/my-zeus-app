import React from 'react';
import HeroSection from './components/HeroSection';
import './styles.css';
import zeusLogo from './assets/zeus-logo.png';

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <div className="logo">
          <img src={zeusLogo} alt="Zeus Logo" className="header-logo-image" />
        </div>
        <nav className="header-nav">
          <a href="#" className="nav-link">Read Docs</a>
          <button className="header-join-btn">Join Waitlist</button>
        </nav>
      </header>

      <HeroSection />

      <div className="activate-windows-text">
        <p>Activate Windows<br />Go to Settings to activate Windows.</p>
      </div>
    </div>
  );
}

export default App;
