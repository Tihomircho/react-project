import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hero title='Добре дощли' subtitle='Това е вашият Реацт + TS Сайт' />
      </header>
    </div>
  );
}

export default App;
