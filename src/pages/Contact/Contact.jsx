import React from "react";
import "./Contact.css";
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Header from '../../components/Header/Header'
export const ContactPage = () => {
  return (<>   <Header/> <div className="graduates-page">
      <h1 className="title">Контакты школы «ДАНА»</h1>
      <div className="contact-section">
        <div className="contact-block">
          <FaMapMarkerAlt className="icon" />
          <div>
            <p><strong>Адрес:</strong> Алматинская область, Талгарский район, село Жана-Куат, улица Райымбека, 113 здание</p>
            <a href="https://2gis.kz/almaty/geo/70000001019977638/77.025026,43.399782" target="_blank" rel="noopener noreferrer">
              Открыть в 2ГИС
            </a>
          </div>
        </div>

        <div className="contact-block">
          <FaWhatsapp className="icon" />
          <div>
            <p><strong>Call-центр:</strong> <a href="https://wa.me/+77003700333">+7 700 370 03 33</a></p>
            <p><strong>HR отдел:</strong> <a href="https://wa.me/+77058116933">+7 705 811 69 33</a></p>
            <p><strong>Бухгалтерия:</strong> <a href="https://wa.me/+77073700333">+7 707 370 03 33</a></p>
          </div>
        </div>

        <div className="contact-block">
          <FaEnvelope className="icon" />
          <p><strong>Email:</strong> <a href="mailto:info@danaschool.kz">info@danaschool.kz</a></p>
        </div>

        <h2 className="contact-title">Социальные сети</h2>
        <div className="social-links">
          <p>
            <FaInstagram className="icon" />
            <a href="https://www.instagram.com/dana_school_almaty?igsh=MTJxMXAzcHJjMWNyMA==" target="_blank" rel="noopener noreferrer">
              Instagram (основной)
            </a>
          </p>
          <p>
            <FaInstagram className="icon" />
            <a href="https://www.instagram.com/dana.highschool?igsh=amJ3bXVnMGZkcnV5" target="_blank" rel="noopener noreferrer">
              Instagram (high school)
            </a>
          </p>
          <p>
            <FaTiktok className="icon" />
            <a href="https://www.tiktok.com/@dana_school_almaty?_t=ZM-8tFGUwSB41G&_r=1" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </p>
        </div>
      </div>
    </div></>

  );
}
