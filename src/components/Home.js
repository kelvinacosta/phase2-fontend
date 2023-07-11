import React from 'react';
import "../homecss.css"

function Home() {
  return (
    
    //Create a div to store a good looking welcoming title to the app
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to The Ecuadorian Recipe Form</h1>
        <p className="home-subtitle">Discover and share delicious Ecuadorian recipes!!</p>
      </div>
    </div>
  );
}

export default Home;
