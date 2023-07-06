import React from "react";

const OfficerDetailsPage = ({ officer, onApprove, onRevoke }) => {
  return (
    <div>
      <h2>Детали сотрудника</h2>
      <p>E-mail: {officer.email}</p>
      <p>Имя: {officer.firstName}</p>
      <p>Фамилия: {officer.lastName}</p>
      {/* Добавьте другие поля сотрудника */}
      <label>
        Одобрено:
        <input
          type="checkbox"
          checked={officer.approved}
          onChange={officer.approved ? onRevoke : onApprove}
        />
      </label>
    </div>
  );
};

export default OfficerDetailsPage;
