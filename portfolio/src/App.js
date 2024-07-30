import React from 'react';
import './App.css'; 
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
