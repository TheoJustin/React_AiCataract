import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import React from "react";
import AboutUs from "./AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
