import React from "react";
import "./Graduates.css";
import Header from '../../components/Header/Header';
import ScrollToTopButton from './../../components/Btns/UpBtn/ScrollToTopButton'
import kbtu from './imgs/kbtu.jpg'
import iitu from './imgs/IITU.jpg'
import kimep from './imgs/kimep.jpg'
import osu from './imgs/Oregon_state.jpg'
import casino from './imgs/casino.jpg'
import almaU from './imgs/almaU.jpg'
import narxoz from './imgs/narxoz.png'
import kau from './imgs/kau.jpg'
import avia from './imgs/avia.jpg'
import ciu from './imgs/ciu.jpg'
import niu from './imgs/NIU vshe.jpg'

import kazgasa from './imgs/kazgasa.jpg'
import kazgiu from './imgs/kazgiu.jpeg'
import krmu from './imgs/krmu.jpg'
import satbayev from './imgs/satbayev.jpg'
import uib from './imgs/uib.jpeg'
import turan from './imgs/turan.jpeg'
import uas from './imgs/uas.jpg'




const universities = [
  {
    name: "Казахстанско-Британский технический университет",
    image: kbtu,
    graduates: [
      "Аргимбаева Александра — Автоматизация и управление",
      "Асылбек Мухамедали — Электротехника и автоматизация",
      "Рахимов Рауль — Data Science в Бизнесе",
      "Нурсапанов Темирлан — Информационные технологии",
    ],
  },
  {
    name: "Университет КИМЭП",
    image: kimep,
    graduates: ["Аязбай Фаиза — Bang college of Business, Corporate finance"],
  },
  {
    name: "Oregon State University",
    image: osu,
    graduates: ["Бурханов Марат"],
  },
  {
    name: "University of Cassino (Италия)",
    image: casino,
    graduates: ["Валеев Ануар"],
  },
  {
    name: "AlmaU – Алматы Менеджмент Университет",
    image: almaU,
    graduates: [
      "Изатов Бейбарс — Менеджмент",
      "Толеген Амина — Маркетинг и реклама",
      "Тынысбаев Ален — Информационные технологии",
      "Устименко Иван — Юриспруденция",
    ],
  },
  {
    name: "NARXOZ University",
    image: narxoz,
    graduates: ["Кажмукан Тамерлан — Информационные технологии"],
  },
  {
    name: "Международный университет информационных технологии",
    image: iitu,
    graduates: [
      "Макушев Кирилл — Кибербезопасность",
      "Вайгандт Богдан — Кибербезопасность",
      "Ни Богдан — Сетевая безопасность",
    ],
  },
  {
    name: "Казахстанско-американский университет",
    image: kau,
    graduates: ["Суренин Андрей — Туризм"],
  },
  {
    name: "Академия Гражданской Авиации",
    image: avia,
    graduates: ["Артеменко Дмитрий — Пилот"],
  },
  {
    name: "Cyprus International University",
    image: ciu,
    graduates: ["Конкашов Алихан — Бизнес администрирование"],
  },
  {
    name: "Национальный исследовательский университет ВШЭ",
    image: niu,
    graduates: ["Котов Даниил — Информационная безопасность"],
  },
  {
    name: "КазГАСА",
    image: kazgasa,
    graduates: ["Пак Таисия — Графический дизайн"],
  },
  {
    name: "КазНУ им. Аль-Фараби",
    image: kazgiu,
    graduates: ["Пилипенко Эвелина — Генетика"],
  },
  {
    name: "Казахстанско-Российский медицинский университет",
    image: krmu,
    graduates: [
      "Сейт Данияр — Стоматология",
      "Ягмур Хамид — Общая медицина",
    ],
  },
  {
    name: "Satbayev University",
    image: satbayev,
    graduates: [
      "Спиридонов Илья — Автоматизация и управление",
      "Цыганков Валерий — Транспортная техника и технологии",
    ],
  },
  {
    name: "UIB – Университет Международного Бизнеса",
    image: uib,
    graduates: ["Темиржанова Карина — Финансы, экономика, банковское дело и страховое дело"],
  },
  {
    name: "Университет \"Туран\"",
    image: turan,
    graduates: ["Тлеу Руслан — Ресторанное дело и гостиничный бизнес"],
  },
  {
    name: "University of Applied Sciences",
    image: uas,
    graduates: ["Хакимова Элина — Foundation"],
  },
];

export const GraduatesPage = () => {
  return ( <> < Header />
    <div className="graduates-page">
      <h1 className="title">Наши выпускники</h1>
      <div className="university-list">
        {universities.map((uni) => (
          <div className="university-card" key={uni.name}>
            <img src={uni.image} alt={uni.name} className="university-image" />
            <h2 className="university-name">{uni.name}</h2>
            <ul className="graduate-list">
              {uni.graduates.map((grad, index) => (
                <li key={index}>{grad}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <ScrollToTopButton />
    <footer className="form-footer">
          <p>© {new Date().getFullYear()} Dana School. Все права защищены.</p>
        </footer>
    </>
  );
}
