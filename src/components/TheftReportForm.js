import React from "react";

const TheftReportForm = () => {
  return (
    <form>
      <h2>Сообщить о краже велосипеда</h2>
      <label>
        Номер лицензии:
        <input type="text" required />
      </label>
      <label>
        ФИО клиента:
        <input type="text" required />
      </label>
      <label>
        Тип велосипеда:
        <select required>
          <option value="">Выберите тип велосипеда</option>
          {/* Добавьте варианты типов велосипедов */}
        </select>
      </label>
      <label>
        Цвет велосипеда:
        <input type="text" />
      </label>
      <label>
        Дата кражи:
        <input type="date" />
      </label>
      <label>
        Дополнительная информация:
        <textarea></textarea>
      </label>
      {/* Добавьте поле "Ответственный сотрудник" для авторизованных сотрудников */}
      {/* Добавьте кнопку "Отправить" */}
    </form>
  );
};

export default TheftReportForm;
