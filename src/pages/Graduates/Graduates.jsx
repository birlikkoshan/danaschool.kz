import React from "react";
import "./Graduates.css";
import Header from '../../components/Header/Header';
import ScrollToTopButton from './../../components/Btns/UpBtn/ScrollToTopButton'

const universities = [
  {
    name: "Казахстанско-Британский технический университет",
    image: "/img/kbtu.jpg",
    graduates: [
      "Аргимбаева Александра — Автоматизация и управление",
      "Асылбек Мухамедали — Электротехника и автоматизация",
      "Рахимов Рауль — Data Science в Бизнесе",
      "Нурсапанов Темирлан — Информационные технологии",
    ],
  },
  {
    name: "Университет КИМЭП",
    image: "/img/kimep.jpg",
    graduates: ["Аязбай Фаиза — Bang college of Business, Corporate finance"],
  },
  {
    name: "Oregon State University",
    image: "/img/oregon.jpg",
    graduates: ["Бурханов Марат"],
  },
  {
    name: "University of Cassino (Италия)",
    image: "/img/cassino.jpg",
    graduates: ["Валеев Ануар"],
  },
  {
    name: "AlmaU – Алматы Менеджмент Университет",
    image: "/img/almau.jpg",
    graduates: [
      "Изатов Бейбарс — Менеджмент",
      "Толеген Амина — Маркетинг и реклама",
      "Тынысбаев Ален — Информационные технологии",
      "Устименко Иван — Юриспруденция",
    ],
  },
  {
    name: "NARXOZ University",
    image: "/img/narxoz.jpg",
    graduates: ["Кажмукан Тамерлан — Информационные технологии"],
  },
  {
    name: "Международный университет информационных технологии",
    image: "/img/iitu.jpg",
    graduates: [
      "Макушев Кирилл — Кибербезопасность",
      "Вайгандт Богдан — Кибербезопасность",
      "Ни Богдан — Сетевая безопасность",
    ],
  },
  {
    name: "Казахстанско-американский университет",
    image: "/img/kau.jpg",
    graduates: ["Суренин Андрей — Туризм"],
  },
  {
    name: "Академия Гражданской Авиации",
    image: "/img/aviation.jpg",
    graduates: ["Артеменко Дмитрий — Пилот"],
  },
  {
    name: "Cyprus International University",
    image: "/img/cyprus.jpg",
    graduates: ["Конкашов Алихан — Бизнес администрирование"],
  },
  {
    name: "Национальный исследовательский университет ВШЭ",
    image: "/img/hse.jpg",
    graduates: ["Котов Даниил — Информационная безопасность"],
  },
  {
    name: "КазГАСА",
    image: "/img/kazgasa.jpg",
    graduates: ["Пак Таисия — Графический дизайн"],
  },
  {
    name: "КазНУ им. Аль-Фараби",
    image: "/img/kaznu.jpg",
    graduates: ["Пилипенко Эвелина — Генетика"],
  },
  {
    name: "Казахстанско-Российский медицинский университет",
    image: "/img/kazrusmed.jpg",
    graduates: [
      "Сейт Данияр — Стоматология",
      "Ягмур Хамид — Общая медицина",
    ],
  },
  {
    name: "Satbayev University",
    image: "/img/satbayev.jpg",
    graduates: [
      "Спиридонов Илья — Автоматизация и управление",
      "Цыганков Валерий — Транспортная техника и технологии",
    ],
  },
  {
    name: "UIB – Университет Международного Бизнеса",
    image: "/img/uib.jpg",
    graduates: ["Темиржанова Карина — Финансы, экономика, банковское дело и страховое дело"],
  },
  {
    name: "Университет \"Туран\"",
    image: "/img/turan.jpg",
    graduates: ["Тлеу Руслан — Ресторанное дело и гостиничный бизнес"],
  },
  {
    name: "University of Applied Sciences",
    image: "/img/uas.jpg",
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
    </>
  );
}
