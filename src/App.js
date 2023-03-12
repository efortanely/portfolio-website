import React, {useState} from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work.js';
import WorkHistory from './components/WorkHistory/WorkHistory';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Header open={open} setOpen={setOpen}/>
      <Home open={open}/>
      <About />
      <Work />
      <WorkHistory />
      <Contact />
      <footer>
        <p>Copyright © {new Date().getFullYear()}
          <span> My Portfolio </span> - All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;