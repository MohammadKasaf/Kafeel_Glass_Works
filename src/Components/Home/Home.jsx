import { Link } from 'react-router-dom';
import aboutImage from '../../assets/about.webp';
import { default as gallery1, default as gallery4 } from '../../assets/gallery/IMG-20250523-WA0000.jpg';
import gallery2 from '../../assets/gallery/IMG-20250523-WA0001.jpg';
import gallery3 from '../../assets/gallery/IMG-20250523-WA0002.jpg';
import product1 from '../../assets/gallery/IMG-20250523-WA0007.jpg';
import product2 from '../../assets/gallery/IMG-20250523-WA0008.jpg';
import product3 from '../../assets/gallery/IMG-20250523-WA0009.jpg';
import product4 from '../../assets/gallery/IMG-20250523-WA0010.jpg';


import './Home.css';

const Home = () => {
  return (
    <>
      
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h2 className="section-title">About Us</h2>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Kafeel Glass Works" />
          </div>
          <div className="about-content">
            <p className="about-text">
              Kafeel Glass Works has been a leader in decorative and architectural glass since 1995.
              We provide high-quality, customized glass solutions for homes, offices, and commercial spaces.
            </p>
            <p className="about-text">
              Our team of skilled artisans combines traditional techniques with modern technology to deliver
              exceptional results tailored to each client's unique vision.
            </p>
            <div className="about-us-button">
              <Link to="/about" className="btn-secondary about-more-btn">
              About Us More
            </Link>
            </div>
            
          </div>
        </div>
      </section>

  
      <section className="products-section">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Explore our wide range of glass designs and patterns</p>
        </div>
        <div className="products-grid">

          <div className="product-card">
            <div className="product-image-container">
              <img src={product4} alt="Frosted Glass" />
            </div>
            <h3>Frosted Glass</h3>
            <p>Elegant privacy with a modern touch</p>
          </div>
          <div className="product-card">
            <div className="product-image-container">
              <img src={product1} alt="Frosted Glass" />
            </div>
            <h3>Frosted Glass</h3>
            <p>Elegant privacy with a modern touch</p>
          </div>
          <div className="product-card">
            <div className="product-image-container">
              <img src={product2} alt="Stained Glass" />
            </div>
            <h3>Stained Glass</h3>
            <p>Colorful artistry for timeless beauty</p>
          </div>
          <div className="product-card">
            <div className="product-image-container">
              <img src={product3} alt="Etched Glass" />
            </div>
            <h3>Etched Glass</h3>
            <p>Detailed designs for a classic look</p>
          </div>
        </div>
        <div className="section-footer">
          <Link to="/products" className="btn-secondary products-more-btn">
            View All Products
          </Link>
        </div>
      </section>

    
      <section className="benefits-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Quality, craftsmanship, and customer satisfaction</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Custom Designs</h3>
            <p>Tailored glass solutions to match your style and space</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🛠️</div>
            <h3>Expert Craftsmanship</h3>
            <p>Over 30 years of experience in decorative glass work</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⏱️</div>
            <h3>On-Time Delivery</h3>
            <p>Reliable service with timely project completion</p>
          </div>
        </div>
      </section>

      
      <section className="gallery-section">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">A glimpse into our recent work</p>
        </div>
        <div className="gallery-teaser">
           <div className="gallery-item">
            <img src={gallery4} alt="Glass work 1" />
            <div className="gallery-overlay"></div>
          </div>
          <div className="gallery-item">
            <img src={gallery1} alt="Glass work 1" />
            <div className="gallery-overlay"></div>
          </div>
          <div className="gallery-item">
            <img src={gallery2} alt="Glass work 2" />
            <div className="gallery-overlay"></div>
          </div>
          <div className="gallery-item">
            <img src={gallery3} alt="Glass work 3" />
            <div className="gallery-overlay"></div>
          </div>
        </div>
        <Link to="/gallery" className="btn-primary gallery-btn">View Full Gallery</Link>
      </section>

    
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Transform Your Space?</h2>
          <p>Contact us today to discuss your glass design project and get a free quote.</p>
          <Link to="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}

export default Home;