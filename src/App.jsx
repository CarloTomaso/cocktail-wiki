import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
