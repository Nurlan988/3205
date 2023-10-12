import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'number' ? formatNumber(value) : value,
    });
  };

  const formatNumber = (value) => {
    // Добавить маску для номера
    // Например, 221122 становится 22-11-22
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Отправка запроса на бэкенд
  };

  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit}>
        <label>Email (обязательное)</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Number (опциональное)</label>
        <input
          type="text"
          name="number"
          placeholder="Number"
          value={formData.number}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <div className='preview'>
        <div className="preview-header">Пользователь:</div>
        <div className="preview-main">
          <div className="preview-user-email">Email: <span>{'ads@email.com'}</span></div>
          <div className="preview-user-number">Number:<span>{'88-99-22'}</span></div>
        </div>
      </div>
    </div>
  );
};

export default App;
