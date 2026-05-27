interface HeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const Hero = ({ title, subtitle, bgImage }: HeroProps) => {
  return (
    <section
      style={{
        padding: "20rem 2rem",
        textAlign: "center",
        background: "red",
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="container-fluid">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
