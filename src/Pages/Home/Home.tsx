import Form from "../../Components/Form/Form";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import bgImage from "../../assets/header.jpg";

const Home: React.FC = () => {
  return (
    <div>
      <Hero
        title="Професионални услуги за Вашия дом"
        subtitle="От кашон до готов монтаж. Поправка на ВиК, смяна на контакти и монтаж на лампи. Без бъркотия и на достъпни цени."
        bgImage={bgImage}
      />
      <Services />
      <Form />
    </div>
  );
};

export default Home;
