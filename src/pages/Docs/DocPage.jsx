import React from 'react';
import './style.css';
import Header from '../../components/Header/Header';
import ScrollToTopButton from './../../components/Btns/UpBtn/ScrollToTopButton'

const documents = [
  // {
  //   title: 'Аттестация / Аттестация',
  //   url: '/docs/attestation.pdf',
  // },
  {
    title: 'Академическая честность / Академиялық адалдық',
    url: '/docs/от 23.01.2025 политика_академической_честности.docx',
  },
  {
    title: 'Политика поступления в школу / Мектепке қабылдау саясаты',
    url: '/docs/от 21.01.2025 Политика поступления в школу.docx',
  },
  {
    title: 'Политика школьной формы и внешнего вида учащегося / Оқушының мектеп формасы мен сыртқы келбеті саясаты',
    url: '/docs/Политика формы и внешнего вида учащихся.docx',
  },
  {
    title: 'Политика безопасности / Қауіпсіздік саясаты',
    url: '/docs/Политика безопасности.docx',
  },
  // {
  //   title: 'Дисциплинарная политика / Тәртіптік саясат',
  //   url: '/docs/discipline-policy.pdf',
  // },
  {
    title: 'Политика о потерянных вещах / Жоғалған заттар саясаты',
    url: '/docs/Политика о потерянных вещах.docx',
  },
  // {
  //   title: 'Политика взаимодействия с родителями / Ата-анамен қарым-қатынас саясаты',
  //   url: '/docs/parent-interaction.pdf',
  // },
  // {
  //   title: 'Положение о пропускном режиме / Өткізу режимі туралы ереже',
  //   url: '/docs/access-policy.pdf',
  // },
  {
    title: 'Политика в отношении домашних заданий / Үй тапсырмасына қатысты саясат',
    url: '/docs/от 23.01.25 Политика в отношении домашних заданий.docx',
  },
  {
    title: 'Антибуллинг / Антибуллинг',
    url: '/docs/Антибуллинг.docx',
    // url: '%PUBLIC_URL%/docs/anti-bullying.pdf',
  },
  {
    title: 'Правила внутреннего распорядка / Ішкі тәртіп ережелері',
    url: '/docs/internal-rules.pdf',
  },
  {
    title: 'Основы охраны здоровья / Денсаулық сақтау негіздері',
    url: '/docs/healthoh.docx',
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
    <footer className="form-footer">
          <p>© {new Date().getFullYear()} Dana School. Все права защищены.</p>
        </footer>
    </>
  );
};

export default DocumentsPage;
