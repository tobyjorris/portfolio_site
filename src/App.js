import React from "react";
import TitleSlide from './Components/Title Slide/titleSlide'
import './App.css';
import Toolbar from "./Components/Navbar/navbar";

function App() {
  return (
    <div className="App">
        <Toolbar />
        <TitleSlide />
    </div>
  );
}

export default App;
