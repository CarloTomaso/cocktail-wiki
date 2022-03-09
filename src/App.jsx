import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screen/home/Home';
import Drink from './screen/drink/Drink';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drink/:id" element={<Drink />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
