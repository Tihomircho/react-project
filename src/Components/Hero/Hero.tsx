"use client";
import style from "./Hero.module.scss";

interface HeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const Hero = ({ title, subtitle, bgImage }: HeroProps) => {
  return (
    <section
      className={style.heroWrapper}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className={`${style.content} container-fluid`}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
