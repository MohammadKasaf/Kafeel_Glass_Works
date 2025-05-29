import { useEffect, useState } from 'react';
import './Gallery.css';

import img1 from '../../assets/gallery/IMG-20250523-WA0000.jpg';
import img2 from '../../assets/gallery/IMG-20250523-WA0001.jpg';
import img3 from '../../assets/gallery/IMG-20250523-WA0002.jpg';
import img4 from '../../assets/gallery/IMG-20250523-WA0003.jpg';
import img5 from '../../assets/gallery/IMG-20250523-WA0004.jpg';
import img6 from '../../assets/gallery/IMG-20250523-WA0005.jpg';
import img7 from '../../assets/gallery/IMG-20250523-WA0006.jpg';
import img8 from '../../assets/gallery/IMG-20250523-WA0007.jpg';
import img9 from '../../assets/gallery/IMG-20250523-WA0008.jpg';
import img10 from '../../assets/gallery/IMG-20250523-WA0009.jpg';
import img11 from '../../assets/gallery/IMG-20250523-WA0010.jpg';
import img12 from '../../assets/gallery/IMG-20250523-WA0011.jpg';
import img13 from '../../assets/gallery/IMG-20250523-WA0012.jpg';
import img14 from '../../assets/gallery/IMG-20250523-WA0013.jpg';
import img15 from '../../assets/gallery/IMG-20250523-WA0014.jpg';
import img16 from '../../assets/gallery/IMG-20250523-WA0015.jpg';
import img17 from '../../assets/gallery/IMG-20250523-WA0016.jpg';
import img18 from '../../assets/gallery/IMG-20250523-WA0017.jpg';
import img19 from '../../assets/gallery/IMG-20250523-WA0018.jpg';
import img20 from '../../assets/gallery/IMG-20250523-WA0019.jpg';
import img21 from '../../assets/gallery/IMG-20250523-WA0020.jpg';
import img22 from '../../assets/gallery/IMG-20250523-WA0021.jpg';
import img23 from '../../assets/gallery/IMG-20250523-WA0022.jpg';
import img24 from '../../assets/gallery/IMG-20250523-WA0023.jpg';
import img25 from '../../assets/gallery/IMG-20250523-WA0024.jpg';
import img26 from '../../assets/gallery/IMG-20250523-WA0025.jpg';
import img27 from '../../assets/gallery/IMG-20250523-WA0026.jpg';
import img28 from '../../assets/gallery/IMG-20250523-WA0027.jpg';
import img29 from '../../assets/gallery/IMG-20250523-WA0028.jpg';
import img30 from '../../assets/gallery/IMG-20250523-WA0029.jpg';

const galleryImages = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23, img24,
  img25, img26, img27, img28, img29, img30
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const openImage = (index) => {
    setSelectedImg(galleryImages[index]);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length 
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImg(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImg) return;
      
      if (e.key === 'Escape') closeImage();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImg, currentIndex]);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Our Exquisite Collection</h2>
        <p className="gallery-subtitle">Explore the beauty of handcrafted glass beads</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div 
            key={index}
            className="gallery-item"
            onClick={() => openImage(index)}
          >
            <img 
              src={img}
              alt={`Glass bead design ${index + 1}`}
              loading="lazy"
              className="gallery-image"
            />
            <div className="image-overlay">
              <span className="view-text">View</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className={`lightbox ${isZoomed ? 'zoomed' : ''}`}>
          <button onClick={closeImage} className="close-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button 
            onClick={() => navigateImage('prev')} 
            className="nav-btn prev-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div 
            className="lightbox-content"
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img 
              src={selectedImg} 
              alt={`Selected bead ${currentIndex + 1}`} 
              className="lightbox-image"
            />
            <div className="image-counter">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
          
          <button 
            onClick={() => navigateImage('next')} 
            className="nav-btn next-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;