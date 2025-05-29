import { useState } from 'react';
import { FaGlassCheers, FaGlobeAmericas, FaIndustry, FaUsers } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import './About.css';

const About = () => {
  const [language, setLanguage] = useState('english');

  const content = {
    english: {
      heading: "Crafting Excellence Since 1993",
      subheading: "30 Years of Glass Manufacturing Mastery",
      sections: [
        {
          title: "Our Heritage",
          text: "Founded by Mohammad Kafeel Siddiqui, Kafeel Glass Works has been a beacon of quality in glass manufacturing for three decades. From humble beginnings to industry recognition, our journey reflects our commitment to excellence.",
          icon: <FaGlassCheers className="section-icon" />
        },
        {
          title: "Manufacturing Prowess",
          text: "Our state-of-the-art facility houses dedicated furnaces where skilled artisans craft each piece with precision. This vertical integration ensures unparalleled quality control and bespoke solutions for our clients.",
          icon: <FaIndustry className="section-icon" />
        },
        {
          title: "Client Partnerships",
          text: "We've proudly supplied premium glass beads to industry leaders including DIAMA for over 15 years. Our diverse clientele spans jewelry designers, craft manufacturers, and industrial applications.",
          icon: <FaUsers className="section-icon" />
        },
        {
          title: "Global Vision",
          text: "After dominating the domestic market, we're now bringing our three decades of expertise to the global stage, combining traditional craftsmanship with modern innovation.",
          icon: <FaGlobeAmericas className="section-icon" />
        }
      ],
      cta: "Explore Our Glass Collections"
    },
    hindi: {
      heading: "1993 से उत्कृष्टता की रचना",
      subheading: "ग्लास निर्माण में 30 वर्षों का महारत",
      sections: [
        {
          title: "हमारी विरासत",
          text: "मोहम्मद कफील सिद्दीकी द्वारा स्थापित, कफील ग्लास वर्क्स तीन दशकों से गुणवत्ता का प्रतीक रहा है। छोटी शुरुआत से लेकर उद्योग मान्यता तक, हमारी यात्रा हमारी उत्कृष्टता के प्रति प्रतिबद्धता को दर्शाती है।",
          icon: <FaGlassCheers className="section-icon" />
        },
        {
          title: "निर्माण कौशल",
          text: "हमारी अत्याधुनिक सुविधा में समर्पित भट्टियाँ हैं जहाँ कुशल कारीगर प्रत्येक टुकड़े को सटीकता के साथ तैयार करते हैं। यह एकीकृत प्रक्रिया हमारे ग्राहकों के लिए अद्वितीय गुणवत्ता नियंत्रण और अनुकूलित समाधान सुनिश्चित करती है।",
          icon: <FaIndustry className="section-icon" />
        },
        {
          title: "ग्राहक साझेदारी",
          text: "हमने गर्व से डायमा सहित उद्योग के नेताओं को 15 वर्षों से अधिक समय तक प्रीमियम ग्लास बीड की आपूर्ति की है। हमारे विविध ग्राहक आभूषण डिजाइनरों, शिल्प निर्माताओं और औद्योगिक अनुप्रयोगों तक फैले हुए हैं।",
          icon: <FaUsers className="section-icon" />
        },
        {
          title: "वैश्विक दृष्टि",
          text: "घरेलू बाजार में प्रभुत्व स्थापित करने के बाद, अब हम अपने तीन दशकों के विशेषज्ञता को वैश्विक मंच पर ला रहे हैं, जहाँ पारंपरिक कारीगरी आधुनिक नवाचार के साथ मिलती है।",
          icon: <FaGlobeAmericas className="section-icon" />
        }
      ],
      cta: "हमारे ग्लास संग्रह देखें"
    }
  };

  const navigate=useNavigate();

  return (
    <section className="about-container" id="about">
      <div className="language-selector">
        <button 
          className={`lang-btn ${language === 'english' ? 'active' : ''}`}
          onClick={() => setLanguage('english')}
        >
          English
        </button>
        <button 
          className={`lang-btn ${language === 'hindi' ? 'active' : ''}`}
          onClick={() => setLanguage('hindi')}
        >
          Hindi
        </button>
      </div>

      <div className="about-content">
        <div className="about-header">
          <h2 className="about-title">{content[language].heading}</h2>
          <p className="about-subtitle">{content[language].subheading}</p>
          <div className="divider"></div>
        </div>

        <div className="features-grid">
          {content[language].sections.map((section, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper">
                {section.icon}
              </div>
              <h3 className="feature-title">{section.title}</h3>
              <p className="feature-desc">{section.text}</p>
            </div>
          ))}
        </div>

        <button className="cta-button" onClick={()=>navigate('/products')}>
          {content[language].cta}
          <span className="cta-arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default About;