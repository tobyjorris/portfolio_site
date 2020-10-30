import React from "react";
import TitleSlide from './Components/Title Slide/titleSlide';
import About from './Components/About/about'
import './App.css';
import Toolbar from "./Components/Navbar/navbar";

function App() {
  return (
    <div className="App">
        <Toolbar />
        <TitleSlide />
        <About />
    </div>
  );
}

export default App;
