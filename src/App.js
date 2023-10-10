import React from 'react';
import './App.css';
import Navbar from "./components/Header";
import Intro from './components/intro';
import Skills from './components/Skills';
import Projects from './components/projects';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
       <Navbar />
       <Intro/>
       <Skills/>
       <Projects/>
    
    

      


    </div>
  );
}

export default App;
