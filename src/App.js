import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Fichelogement from "./pages/Fichelogement";
import Error from "./pages/Error";





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fichelogement" element={<Fichelogement />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;