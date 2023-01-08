import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
// import Home from './pages/Home';
// import Products from './pages/Products';
import Product from './pages/Product';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Product />
      {/* <Products /> */}
      {/* <Home /> */}
      <Footer />
    </div>
  )
}

export default App;
