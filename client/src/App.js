import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
// import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Products />
      {/* <Home /> */}
      <Footer />
    </div>
  )
}

export default App;
