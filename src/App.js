import React from "react";
import './css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Donate from "./pages/donate";
import Help from "./pages/help";
import Menu from "./components/menu";

function App() {
  
  return (
      <Router>
        <div className='content-section'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/donate' element={<Donate/>} />
                <Route path='/help' element={<Help/>} />
                <Route path='*' element={<Home/>} />
            </Routes>
        </div>
        <Menu/>
    </Router>
  );
}

export default App;
