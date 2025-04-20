import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Slides from '../../components/SlideShow/Slides'
import SuccsesSteps from './../../components/SuccessSteps/SuccessSteps';
import Gallery from './../../components/Gallery/Gallery';
import ScrollToTopButton from './../../components/Btns/UpBtn/ScrollToTopButton'

import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'

import gal1 from './gal/gal1.png';
import gal2 from './gal/gal2.png';
import gal3 from './gal/gal3.png';
import gal4 from './gal/gal4.png';
import gal5 from './gal/gal5.png';
import gal6 from './gal/gal6.png';
import gal7 from './gal/gal7.png';
// import gal8 from './img/gal8.png';
// import gal9 from './img/gal9.png';


const imageUrls = [img1, img2, img3];
const galUrls = [gal1, gal2, gal3, gal4, gal5,gal6, gal7];
// , gal8, gal9
export const MainPage = () => {
    const [lang, setLang] = useState('kz');

    useEffect(() => {
        const savedLang = localStorage.getItem('lang') || 'kz';
        setLang(savedLang);
    }, []);
    useEffect(() => {
        const handleStorageChange = () => {
            const savedLang = localStorage.getItem('lang') || 'kz';
            setLang(savedLang);
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return <div>
        <Header />
        <Slides pageCount={3} imageUrls={imageUrls} lang={lang}/>
        <SuccsesSteps lang={lang}/>
        <Gallery imgUrls={galUrls}/>
        <ScrollToTopButton/>

    </div>
}