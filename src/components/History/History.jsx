import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const events = [
  { year: '2009', text: 'Открыли детский сад на 50 детей' },
  { year: '2012', text: 'Открыли начальную школу для 1 класса' },
  { year: '2014', text: 'Построили здание начальной школы' },
  { year: '2020', text: 'Построили здание средней школы' },
  { year: '2022', text: 'Построили здание старшей школы' },
];

const SchoolTimeline = (props) => {
    const {lang} = props
  return (
    <div className="timeline-wrapper">
      <motion.h2 
        className="timeline-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        История школы
      </motion.h2>

      <div className="timeline-container">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-text">{event.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SchoolTimeline;
