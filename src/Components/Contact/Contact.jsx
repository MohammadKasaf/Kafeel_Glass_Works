import { useState } from 'react';
import { FaEnvelope, FaGlassCheers, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="glass-overlay"></div>
      
      <div className="contact-container">
        <div className="section-header">
          <FaGlassCheers className="section-icon" />
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">We'd love to hear from you about your glass bead requirements</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="card-icon phone">
                <FaPhoneAlt />
              </div>
              <h3>Call Us</h3>
              <a href="tel:+919045497383">+91 9045497383</a>
            </div>

            <div className="info-card">
              <div className="card-icon whatsapp">
                <FaWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/919045497383">+91 9045497383</a>
            </div>

            <div className="info-card">
              <div className="card-icon email">
                <FaEnvelope />
              </div>
              <h3>Email Us</h3>
              <a href="mailto:siddmr009@gmail.com">siddmr009@gmail.com</a>
            </div>

            <div className="info-card">
              <div className="card-icon address">
                <FaMapMarkerAlt />
              </div>
              <h3>Our Location</h3>
              <p>Purdilnagar,Hathras, Uttar Pradesh,India</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitSuccess ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll contact you shortly.</p>
                <button 
                  className="success-btn"
                  onClick={() => setSubmitSuccess(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send Us a Message</h3>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                  <span className="input-border"></span>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                  <span className="input-border"></span>
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                  />
                  <span className="input-border"></span>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                  <span className="input-border"></span>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <RiSendPlaneFill className="send-icon" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="business-promise">
          <h3>Why Choose Kafeel Glass Works?</h3>
          <div className="promise-grid">
            <div className="promise-item">
              <div className="promise-icon">✓</div>
              <p>30+ Years of Experience</p>
            </div>
            <div className="promise-item">
              <div className="promise-icon">✓</div>
              <p>Premium Quality Glass Beads</p>
            </div>
            <div className="promise-item">
              <div className="promise-icon">✓</div>
              <p>Competitive Market Prices</p>
            </div>
            <div className="promise-item">
              <div className="promise-icon">✓</div>
              <p>Custom Designs Available</p>
            </div>
            <div className="promise-item">
              <div className="promise-icon">✓</div>
              <p>Bulk Order Specialists</p>
            </div>
            <div className="promise-item">
              <div className="promise-icon">✓</div>
              <p>All Types & Sizes Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;