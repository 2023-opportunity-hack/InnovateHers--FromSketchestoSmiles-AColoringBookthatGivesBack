import './App.css';

import React, { useState } from 'react';


function App() {

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="App">
      <header className="App-header">
          <div>
            {/* Navigation */}
            <nav>
              <button className="sponsor-button">Sponsor</button>
            </nav>

            {/* Main Content */}
            <main>
              <section>
                <h1>Welcome to Our Website</h1>
              </section>

              <section>
                <button className="organization-button" onClick={toggleForm}>
                  Organization
                </button>
                {showForm && (
                  <form className="organization-form">
                    <h2>Organization Form</h2>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <textarea id="description" rows="4" />
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                )}
              </section>
            </main>
          </div>
      </header>
    </div>
  );
}

export default App;
