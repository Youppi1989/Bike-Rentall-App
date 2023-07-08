import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TheftReportForm = () => {
  const navigate = useNavigate();
  const [bikeType, setBikeType] = useState("");
  const [color, setColor] = useState("");
  const [date, setDate] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/theft-reports`);
  };

  const handleBikeTypeChange = (e) => {
    setBikeType(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  return (
    <div>
      <h2>Сообщить о краже велосипеда</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label>
            Номер лицензии:
            <input type="text" name="licenseNumber" />
          </label>
        </div>
        <div className="form-row">
          <label>
            ФИО клиента:
            <input type="text" name="fullName" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Тип велосипеда:
            <select name="bikeType" value={bikeType} onChange={handleBikeTypeChange}>
              <option value="">Выберите тип велосипеда</option>
              <option value="Горный">Горный</option>
              <option value="Шоссейный">Шоссейный</option>
              <option value="Гибридный">Гибридный</option>
            </select>
          </label>
        </div>
        <div className="form-row">
          <label>
            Цвет велосипеда:
            <input type="text" name="color" value={color} onChange={handleColorChange} />
          </label>
        </div>
        <div className="form-row">
          <label>
            Дата кражи:
            <input type="date" name="date" value={date} onChange={handleDateChange} />
          </label>
        </div>
        <div className="form-row">
          <label>
            Дополнительная информация:
            <textarea name="additionalInfo" value={additionalInfo} onChange={handleAdditionalInfoChange} />
          </label>
        </div>
        <button type="button-submit">Отправить</button>
      </form>
    </div>
  );
};

export default TheftReportForm;
