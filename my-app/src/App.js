import './App.css';

import React, { useState } from 'react';


function App() {

  const [showForm, setShowForm] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    const { name, description, images } = e.target;
    setFormData({ ...formData, [name]: value, [images]:selectedImages, [description]:value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Item added successfully');
      } else {
        console.error('Server error');
      }
    } catch (error) {
      console.error('Client error', error);
    }
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
                    <div className="form-group">
                      <label htmlFor="images">Upload Images:</label>
                      <input
                        type="file"
                        id="images"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                      />
                      
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                )}
                {selectedImages.length > 0 && (
                  <div className="selected-images">
                    <h3>Selected Images:</h3>
                    <ul>
                      {selectedImages.map((image, index) => (
                        <li key={index}>{image.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            </main>
          </div>
      </header>
    </div>
  );
}

export default App;
