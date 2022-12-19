import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">Content</div>
      <Footer />
    </div>
  )
}

export default App;
