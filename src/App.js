import React from "react";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Utkrusht Talent Profiles</h1>
        <p>Browse a snapshot of candidates on the Utkrusht marketplace.</p>
      </header>
      <main className="app-main">
        <div className="profile-grid">
          <div className="profile-card">
            <img
              className="profile-avatar"
              src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Profile of Ananya Gupta"
            />
            <h2 className="profile-name">Ananya Gupta</h2>
            <p className="profile-role">Frontend Developer · React</p>
            <p className="profile-location">Bengaluru, India</p>
            <p className="profile-summary">
              Built internal dashboards and small UI features during an internship
              at a SaaS startup.
            </p>
            <button className="profile-toggle-button">View details</button>
            <div className="profile-extra">
              <p>
                Strong in HTML and CSS, comfortable with modern JavaScript, and
                has completed multiple beginner React courses focused on
                components and basic hooks.
              </p>
            </div>
          </div>

          <div className="profile-card">
            <img
              className="profile-avatar"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Profile of Ravi Verma"
            />
            <h2 className="profile-name">Ravi Verma</h2>
            <p className="profile-role">Fullstack Intern · MERN</p>
            <p className="profile-location">Pune, India</p>
            <p className="profile-summary">
              Helped build a small proof-of-concept app using MongoDB, Express,
              React, and Node during a summer internship.
            </p>
            <button className="profile-toggle-button">View details</button>
            <div className="profile-extra">
              <p>
                Comfortable creating simple REST APIs, connecting them to React
                frontends, and managing basic component state for forms and
                lists.
              </p>
            </div>
          </div>

          <div className="profile-card">
            <img
              className="profile-avatar"
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Profile of Sara Khan"
            />
            <h2 className="profile-name">Sara Khan</h2>
            <p className="profile-role">Junior UI Engineer</p>
            <p className="profile-location">Remote · India</p>
            <p className="profile-summary">
              Designed and implemented marketing pages and simple interactive
              components for a product website.
            </p>
            <button className="profile-toggle-button">View details</button>
            <div className="profile-extra">
              <p>
                Experienced with responsive layouts, basic accessibility
                practices, and styling React apps with plain CSS and utility
                classes.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
