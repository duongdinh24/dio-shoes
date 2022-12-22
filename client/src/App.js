import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';
function App() {
  return (
    <div className="app-container">
      <Header />
      {/* <div className="content">Content</div> */}
      <Home />
      <Footer />
    </div>
  )
}

export default App;
