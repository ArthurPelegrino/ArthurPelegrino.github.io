/* eslint-disable require-jsdoc */
import {Route, Routes} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import Home from './pages/home/index';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
