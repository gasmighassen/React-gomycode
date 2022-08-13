import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Home from './components/Home';
import AddMovie from './components/AddMovie';



function App() {

 
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<AddMovie/>} />
      </Routes>
      
    </div>
  );
}

export default App;
