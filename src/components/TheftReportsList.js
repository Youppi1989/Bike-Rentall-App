import React from 'react';

// Компонент для отображения списка сообщений о кражах
const TheftReportsList = ({ theftReports, onDelete }) => {
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
            <td>{report.fullName}</td>
            <td>{report.bikeType}</td>
            {/* Добавьте другие ячейки таблицы */}
            <td>
              <button onClick={() => onDelete(report.id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TheftReportsList;
