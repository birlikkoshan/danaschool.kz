// import { useState } from 'react';

// // const images = [
  // //   '/images/photo1.jpg',
  // //   '/images/photo2.jpg',
  // //   '/images/photo3.jpg',
  // //   '/images/photo4.jpg',
  // //   '/images/photo5.jpg',
  // //   '/images/photo6.jpg',
  // // ];
  
  // export default function Gallery({imgUrls}) {
    //   const [selectedImage, setSelectedImage] = useState(null);
    
    //   return (
      //     <section className="gallery-section">
      //       <h2 className="gallery-title">Галерея</h2>
      //       <div className="gallery-grid">
      //         {imgUrls?.map((src, idx) => (
        //           <div key={idx} className="gallery-item" onClick={() => setSelectedImage(src)}>
        //             <img src={src} alt={`Gallery ${idx}`} />
        //           </div>
        //         ))}
        //       </div>
        
        //       {selectedImage && (
          //         <div className="modal" onClick={() => setSelectedImage(null)}>
          //           <img src={selectedImage} alt="Full" />
          //         </div>
          //       )}
          //     </section>
          //   );
          // }
          
          

// src/components/Slider.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';


const FullScreenSlider = ({imgUrls}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null); 
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === 0 ? imgUrls.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === imgUrls.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipe = 50;

    if (distance > minSwipe) {
      nextSlide();
    } else if (distance < -minSwipe) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Reset direction on index change complete
  useEffect(() => {
    const timer = setTimeout(() => setDirection(null), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div
        className={`slider-slide ${direction === 'left' ? 'slide-left' : ''} ${direction === 'right' ? 'slide-right' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img src={imgUrls[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>

      <button className="arrow left" onClick={prevSlide}></button>
      <button className="arrow right" onClick={nextSlide}></button>
    </div>
  );
};

export default FullScreenSlider;