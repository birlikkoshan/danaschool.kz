import './AdmissionPage.css';
import Header from '../../components/Header/Header';
import Btn from './../../components/Btns/SendForm/btn'
export const AdmissionPage = () => {
  return (<>
    <Header/>
    <div className="admission-page">
      <h1 className="admission-title">Этапы поступления</h1>
      
      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <h3>Заполнение регистрационной формы – Заявление</h3>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <h3>Вступительные экзамены</h3>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <h3>Собеседование</h3>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <h3>Подписание договора и предоставление документов</h3>
        </div>
      </div>

      <h2 className="admission-subtitle">Вступительные экзамены</h2>

      <div className="exam-blocks">
        <div className="exam-card">
          <h3>1–2 классы</h3>
          <ul>
            <li>🧠 Мышление</li>
            <li>🧩 Память и внимание</li>
            <li>🗣️ Речь</li>
          </ul>
          <p>Также проводится собеседование с психологом.</p>
        </div>

        <div className="exam-card">
          <h3>3–4 классы</h3>
          <ul>
            <li>📐 Математика</li>
            <li>📘 Казахский/Русский язык</li>
            <li>🌍 Английский язык</li>
          </ul>
        </div>

        <div className="exam-card">
          <h3>5–11 классы</h3>
          <ul>
            <li>📐 Математика</li>
            <li>📘 Казахский/Русский язык</li>
            <li>🌍 Английский язык</li>
          </ul>
          <p>Результаты публикуются на сайте через 14 календарных дней.</p>
        </div>
      </div>
    </div>
    <Btn left={24} text="Список документов"/>
    <Btn right={24} text="Заполнить регистрационную форму" url='/create-application'/>
    <footer className="form-footer">
          <p>© {new Date().getFullYear()} Dana School. Все права защищены.</p>
        </footer>
    </>
  );
};

