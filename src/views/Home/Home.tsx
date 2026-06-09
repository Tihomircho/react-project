"use client";
import Form from "../../Components/Form/Form";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import bgImage from "../../assets/header.jpg";
import { useRef } from "react";
const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const handkeClick = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div>
      <Hero
        title="Професионални услуги за Вашия дом"
        subtitle="От кашон до готов монтаж. Поправка на ВиК, смяна на контакти и монтаж на лампи. Без бъркотия и на достъпни цени."
        bgImage={bgImage.src}
      />
      <Services onScrollToForm={handkeClick} />
      <Form formRef={targetRef} />
    </div>
  );
};

export default Home;
