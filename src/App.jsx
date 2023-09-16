import './App.css'
import React from 'react';
import Header from './components/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;