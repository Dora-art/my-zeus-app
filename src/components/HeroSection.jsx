import React from 'react';
import dashboardImage from '../assets/dashboard.png'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text-content">
        <h1>
          Command the Cloud.<br />
          Automate DevOps.<br />
          Powered by <span>Zeus AI</span>.
        </h1>
        <p>
          Zeus is your AI co-pilot for DevOps — instantly diagnose broken CI/CD pipelines, auto-generate infrastructure, trace cloud deployments, and orchestrate cross-cloud operations with a single CLI. No YAML. No guesswork. Just intelligent automation.
        </p>
        <div className="hero-buttons-mobile">
          <button className="join-btn">Join Waitlist</button>
          <button className="read-btn">Read Docs</button>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={dashboardImage} alt="Zeus Dashboard" className="dashboard-image" />
      </div>
    </section>
  );
}

export default HeroSection;
