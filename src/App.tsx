import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Features from "../src/Pages/Features/Features";
import Home from "../src/Pages/Home/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
