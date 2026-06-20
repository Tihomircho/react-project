"use client";
import Form from "../../Components/Form/Form";
import Hero from "../../Components/Hero/Hero";
import Partners from "../../Components/Partners/Partners";
import Services from "../../Components/Services/Services";
import bgImage from "../../assets/header.jpg";
import { useRef } from "react";
import { useTranslations } from "next-intl";
interface HomeProps {
  locale: string;
}
const Home: React.FC<HomeProps> = ({ locale }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Home");
  const handkeClick = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div>
      <Hero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        bgImage={bgImage.src}
      />
      <Services onScrollToForm={handkeClick} locale={locale} />
      <Form formRef={targetRef} locale={locale} />
      <Partners />
    </div>
  );
};

export default Home;
