import React from "react";

const TheftReportDetailsPage = ({ theftReport }) => {
  return (
    <div>
      <h2>Детали сообщения о краже</h2>
      <p>Номер лицензии: {theftReport.licenseNumber}</p>
      <p>ФИО клиента: {theftReport.fullName}</p>
      <p>Тип велосипеда: {theftReport.bikeType}</p>
      {/* Добавьте другие поля из сообщения о краже */}
    </div>
  );
};

export default TheftReportDetailsPage;
