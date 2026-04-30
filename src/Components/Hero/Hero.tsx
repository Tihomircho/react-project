interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center', background: 'red' }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default Hero;
