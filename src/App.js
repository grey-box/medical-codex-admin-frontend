import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Help from './components/Help/Help.js';
import Admin from './components/Admin/Admin.js';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/help" exact element={<Help/>} />
        <Route path="/admin" exact element={<Admin/>} />
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
