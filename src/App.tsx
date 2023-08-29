import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router> 
      <div>
        <nav>
          <ul><Link to="/">Home</Link></ul>
          <ul><Link to="/about">About</Link></ul>
          <ul><Link to="/contact" >contact</Link></ul>
        </nav>
      </div>
        <Routes>
          <Route path="/about" element={<About/>}>
          </Route>
      
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
