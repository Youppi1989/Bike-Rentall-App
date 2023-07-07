import React from "react";
import { useNavigate } from "react-router-dom";

const TheftReportForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправка формы и обработка данных
    // После успешной отправки формы
    navigate(`/theft-report/123`); // Замените "123" на фактический идентификатор отчета о краже
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Сообщить о краже велосипеда</h2>
      {/* Остальные поля формы */}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default TheftReportForm;
