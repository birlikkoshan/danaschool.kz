import { useState } from 'react';
import './Gallery.css';

// const images = [
//   '/images/photo1.jpg',
//   '/images/photo2.jpg',
//   '/images/photo3.jpg',
//   '/images/photo4.jpg',
//   '/images/photo5.jpg',
//   '/images/photo6.jpg',
// ];

export default function Gallery({imgUrls}) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Галерея</h2>
      <div className="gallery-grid">
        {imgUrls?.map((src, idx) => (
          <div key={idx} className="gallery-item" onClick={() => setSelectedImage(src)}>
            <img src={src} alt={`Gallery ${idx}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full" />
        </div>
      )}
    </section>
  );
}
