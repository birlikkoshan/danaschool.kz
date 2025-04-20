import React from 'react';
import './SchoolMission.css';

const SchoolMission = (props) => {
    const {lang} = props
  return (
    <section className="mission-section">
      <div className="mission-content">
        <h2 className="mission-title">Миссия школы</h2>
        <p className="mission-text">
          Прививать ценность обучения в каждом ученике и готовить будущих лидеров общества
        </p>

        <h2 className="mission-title">Наше видение</h2>
        <p className="mission-text">
            Школа "ДАНА" является ролевой моделью для школ в Алматинской области в воспитании и обучении конкурентноспособного поколения выпускников
        </p>
      </div>
    </section>
  );
};

export default SchoolMission;
