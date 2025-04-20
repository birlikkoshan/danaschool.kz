import React from 'react';
import './style.css';
import Header from '../../components/Header/Header';
import ScrollToTopButton from './../../components/Btns/UpBtn/ScrollToTopButton'

const documents = [
  {
    title: 'Аттестация / Аттестация',
    url: '/docs/attestation.pdf',
  },
  {
    title: 'Академическая честность / Академиялық адалдық',
    url: '/docs/academic-honesty.pdf',
  },
  {
    title: 'Политика поступления в школу / Мектепке қабылдау саясаты',
    url: '/docs/admission-policy.pdf',
  },
  {
    title: 'Политика школьной формы и внешнего вида учащегося / Оқушының мектеп формасы мен сыртқы келбеті саясаты',
    url: '/docs/uniform-policy.pdf',
  },
  {
    title: 'Политика безопасности / Қауіпсіздік саясаты',
    url: '/docs/safety-policy.pdf',
  },
  {
    title: 'Дисциплинарная политика / Тәртіптік саясат',
    url: '/docs/discipline-policy.pdf',
  },
  {
    title: 'Политика о потерянных вещах / Жоғалған заттар саясаты',
    url: '/docs/lost-and-found.pdf',
  },
  {
    title: 'Политика взаимодействия с родителями / Ата-анамен қарым-қатынас саясаты',
    url: '/docs/parent-interaction.pdf',
  },
  {
    title: 'Положение о пропускном режиме / Өткізу режимі туралы ереже',
    url: '/docs/access-policy.pdf',
  },
  {
    title: 'Политика в отношении домашних заданий / Үй тапсырмасына қатысты саясат',
    url: '/docs/homework-policy.pdf',
  },
  {
    title: 'Антибуллинг / Антибуллинг',
    url: '/docs/anti-bullying.pdf',
  },
  {
    title: 'Правила внутреннего распорядка / Ішкі тәртіп ережелері',
    url: '/docs/internal-rules.pdf',
  },
  {
    title: 'Основы охраны здоровья / Денсаулық сақтау негіздері',
    url: '/docs/health-safety.pdf',
  },
];

export const DocumentsPage = () => {
  return ( <>
    <Header/>
    <section className="documents-section">
      <div className="container">
        <h1 className="documents-title">
          ВНУТРЕННИЕ НОРМАТИВНЫЕ ДОКУМЕНТЫ:<br />ІШКІ НОРМАТИВТІК ҚҰЖАТТАР:
        </h1>
        <ul className="document-list">
          {documents.map((doc, idx) => (
            <li key={idx} className="document-item">
              <span className="doc-name">{doc.title}</span>
              <a href={doc.url} download className="download-btn">
                Скачать
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <ScrollToTopButton/>
    </>
  );
};

export default DocumentsPage;
