import React from "react";
import { deleteCase } from './Api.js';

// Компонент для отображения списка сообщений о кражах
const TheftReportsList = ({ theftReports, onDelete }) => {
  const handleDelete = async (caseId) => {
    try {
      await deleteCase(caseId);
      onDelete(caseId);
    } catch (error) {
      console.error("Ошибка при удалении сообщения о краже:", error.message);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Номер лицензии</th>
          <th>ФИО клиента</th>
          <th>Тип велосипеда</th>
          {/* Добавьте другие заголовки таблицы */}
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {theftReports.map((report) => (
          <tr key={report.id}>
            <td>{report.licenseNumber}</td>
            <td>{report.ownerFullName}</td>
            <td>{report.type}</td>
            {/* Добавьте другие ячейки таблицы */}
            <td>
              <button onClick={() => handleDelete(report.id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TheftReportsList;
