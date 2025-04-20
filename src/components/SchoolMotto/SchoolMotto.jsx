import React from 'react';
import './SchoolMotto.css';

const SchoolMotto = (props) => {
    const {lang} = props
  return (
    <section className="motto-section">
      <div className="motto-box">
        <h2 className="motto-title">Девиз школы 🎓</h2>
        <p className="motto-text">«Моё будущее — моя ответственность»</p>
      </div>
    </section>
  );
};

export default SchoolMotto;
