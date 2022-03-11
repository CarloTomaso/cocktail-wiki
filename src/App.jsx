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
import NotFound from "./screen/notfound/NotFound.jsx";


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drink/:id" element={<Drink />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
