import { FaWhatsapp } from 'react-icons/fa';
import './Whatsapp.css';

const WhatsApp = () => {

  const whatsappNumber = "919045497383";
  const preFilledMessage = "Hello, I'm interested in your glass beads.";

  const handleClick = () => {
    
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preFilledMessage)}`,
      '_blank'
    );
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-text">Chat with us</span>
    </div>
  );
};

export default WhatsApp;
