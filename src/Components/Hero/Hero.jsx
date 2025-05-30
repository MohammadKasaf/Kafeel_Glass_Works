import heroImage from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="Premium Glass Installations by Kafeel Glass Works"
            className="hero-main-image"
          />
          <div className="image-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-heading">
            <span className="highlight">Kafeel Glass Works</span> - Where Vision
            Meets Transparency
          </h1>
          <p className="hero-subheading">
            Crafting premium glass solutions with precision since 1995. Elevate
            your spaces with our exquisite glass craftsmanship.
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Decades of Expertise</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Premium Materials</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Custom Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
