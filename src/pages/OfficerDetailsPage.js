import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteOfficer } from "../components/Api";
const OfficerDetailsPage = ({ officer }) => {
  const navigate = useNavigate();

  const handleApprove = () => {
    // Perform approve logic here
  };

  const handleRevoke = () => {
    // Perform revoke logic here
  };

  const handleDelete = async () => {
    try {
      await deleteOfficer(officer.id);
      navigate("/responsible-officers");
    } catch (error) {
      console.error("Ошибка при удалении сотрудника:", error);
    }
  };

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
          onChange={officer.approved ? handleRevoke : handleApprove}
        />
      </label>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default OfficerDetailsPage;
