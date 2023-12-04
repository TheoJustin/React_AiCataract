import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import React from "react";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
