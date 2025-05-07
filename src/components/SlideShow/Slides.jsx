import { useEffect, useState } from 'react';
import { translations } from './locales';
import './style.css';

export default function Slideshow(props) {
    const {pageCount, imageUrls, lang} = props;
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % imageUrls.length);
        }, 3000);
        return () => clearTimeout(timer);
    }, [index]);

    const slideTexts = translations[lang] || translations.kz;

    return (
    //     <div className="slideshow">
        // {imageUrls.map((image, i) => (
        //     <div
        //       key={i}
        //       className={`slide ${i === index ? 'active' : ''}`}
        //       style={{ 
        //         backgroundImage: `url(${image})`
        //         }}
        //     />
        // ))}
    //     <div className="slide slide-text">
    //         <div className="overlay static-text">
    //             <h1>{slideTexts?.title}</h1>
    //             <p>{slideTexts?.subtitle}</p>
    //         </div>
    //     </div>

        
    // </div>
    <section className="welcome-section">
    <div className="welcome-content">
      <h1>Добро пожаловать</h1>
      <p>
        Мы предоставляем качественное образование для учащихся с 0 по 11 класс, ориентированное на всестороннее развитие личности и подготовку к успешному будущему. Школа сочетает академическую строгость с индивидуальным подходом к каждому ученику...
      </p>
    </div>
    {imageUrls.map((image, i) => (
    <div
      key={i}
      className={`welcome-image ${i === index ? 'active' : ''}`}
    //   style={{ 
    //     backgroundImage: `url(${image})`
    //     }}
    >
        <img src={image}/>            
    </div>
    ))}
    {/* <div className="welcome-image">
      <img src={image} alt="My Future" />
    </div> */}
  </section>
    );
}
