import React from 'react';
import './Values.css';

const values = [
  { title: 'Уважение', icon: '/icons/respect.png' },
  { title: 'Уверенность в себе', icon: '/icons/confidence.png' },
  { title: 'Ответственность', icon: '/icons/responsibility.png' },
  { title: 'Командная работа', icon: '/icons/teamwork.png' },
  { title: 'Саморазвитие', icon: '/icons/growth.png' },
  { title: 'Дисциплина', icon: '/icons/discipline.png' },
];

const SchoolValues = () => {
  return (
    <section className="values-section">
      <h2 className="values-title">Наши ценности</h2>
      <div className="values-grid">
        {values.map((val, index) => (
          <div key={index} className="value-card">
            <img src={val.icon} alt={val.title} className="value-icon" />
            <h3>{val.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SchoolValues;
