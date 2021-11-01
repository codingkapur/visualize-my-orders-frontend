import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main className="hero-section__container">
      <div className="overlay">
        <div className="hero__text--container">
          <p className="hero__text--title">Service your customers better</p>
          <p className="hero__text--subtitle">
            with the best order management system in the world
          </p>
          <p className="hero__text--link">Learn more</p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
