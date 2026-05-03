import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />

        <Hero title="Добре доШли" subtitle="Това е вашият Реацт + TS Сайт" />
        <Services />
      </header>
    </div>
  );
}

export default App;
