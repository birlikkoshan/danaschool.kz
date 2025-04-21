import React, { useState, useEffect } from 'react';
import './AnimatedForm.css';
import Header from '../../components/Header/Header';

export const AnimatedFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('formData');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Данные сохранены!');
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', message: '' });
    localStorage.removeItem('formData');
  };

  return (<><Header/>
    <div className="form-container">
      
      <form className="animated-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Оставьте свою заявку</h2>

        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>Имя</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>Сообщение</label>
        </div>

        <div className="form-buttons">
          <button type="button" className="btn save" onClick={handleSave}>Сохранить</button>
          <button type="button" className="btn clear" onClick={handleClear}>Очистить</button>
        </div>
      </form>
    </div></>
  );
};
