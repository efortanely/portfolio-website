import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work.js';
import WorkHistory from './components/WorkHistory/WorkHistory';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const [open, setOpen] = useState(false);
  const width = useWindowDimensions().width;

  return (
    <Router>
      <div className="App">
        <Header open={open} setOpen={setOpen} width={width}/>
        <Routes>
          <Route exact path="/" element={<Home open={open} width={width}/>}/>
          <Route path="/about" element={<div><About open={open} width={width}/><Footer/></div>} />
          <Route path="/work" element={<div><WorkHistory/><Footer/></div>} />
          <Route path="/projects" element={<div><Work/><Footer/></div>} />
          <Route path="/contact" element={<div><Contact/><Footer/></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;