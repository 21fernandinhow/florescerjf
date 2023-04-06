import React from "react";
import './css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import Donate from "./pages/donate";
import Help from "./pages/help";
import Menu from "./components/menu";
import Video from "./pages/video";

function App() {
  
  return (
      <Router>
        <div className='content-section'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/donate' element={<Donate/>} />
                <Route path='/help' element={<Help/>} />
                <Route path='/video' element={<Video/>} />
                <Route path='*' element={<Home/>} />
            </Routes>
        </div>
        <Menu/>
    </Router>
  );
}

export default App;
