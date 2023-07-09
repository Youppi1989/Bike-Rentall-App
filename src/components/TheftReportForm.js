import React, { useState } from "react";
import { useNavigate } from "react-router";
import { createCase } from "./Api.js";

const TheftReportForm = () => {
  const navigate = useNavigate();
  const [licenseNumber, setLicenseNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [bikeType, setBikeType] = useState("");
  const [color, setColor] = useState("");
  const [date, setDate] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Создание нового сообщения о краже
    const theftReportData = {
      status: "new",
      licenseNumber,
      type: bikeType,
      ownerFullName: fullName,
      clientId: "123abc", // Замените на необходимое значение clientId
      createdAt: new Date(),
      updatedAt: new Date(),
      color,
      date,
      description: additionalInfo,
      resolution: "",
    };

    try {
      await createCase(theftReportData);
      navigate(`/theft-reports`); // Замените на необходимую страницу
    } catch (error) {
      console.error("Ошибка при создании сообщения о краже:", error.message);
    }
  };

  const handleLicenseNumberChange = (e) => {
    setLicenseNumber(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
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
            <input
              type="text"
              name="licenseNumber"
              value={licenseNumber}
              onChange={handleLicenseNumberChange}
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            ФИО клиента:
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Тип велосипеда:
            <select
              name="bikeType"
              value={bikeType}
              onChange={handleBikeTypeChange}
              required
            >
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
            <input
              type="text"
              name="color"
              value={color}
              onChange={handleColorChange}
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Дата кражи:
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Дополнительная информация:
            <textarea
              name="additionalInfo"
              value={additionalInfo}
              onChange={handleAdditionalInfoChange}
            />
          </label>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default TheftReportForm;
