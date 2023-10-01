import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";

// import Tender from "./components/Tender/Tender";
import Tender from "./components/Tender/Tender";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tender" element={<Tender />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
