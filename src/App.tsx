import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Menu from "./Components/Menu/Menu";
import bgImage from "../src/assets/header.jpg";
import Form from "./Form/Form";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Hero
          title="Професионални услуги за Вашия дом"
          subtitle="От кашон до готов монтаж. Поправка на ВиК, смяна на контакти и монтаж на лампи. Без бъркотия и на достъпни цени."
          bgImage={bgImage}
        />
        {/* <Form /> */}

        <Services />
        <Footer />
      </header>
    </div>
  );
}

export default App;
