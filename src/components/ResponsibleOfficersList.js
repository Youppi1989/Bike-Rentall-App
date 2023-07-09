import React from "react";
import { deleteOfficer } from "./Api";

// Компонент для отображения списка ответственных сотрудников
const ResponsibleOfficersList = ({ officers, onDelete }) => {
  const handleDelete = async (officerId) => {
    try {
      await deleteOfficer(officerId);
      onDelete(officerId);
    } catch (error) {
      console.error("Ошибка при удалении сотрудника:", error);
    }
  };

  return (
    <ul>
      {officers.map((officer) => (
        <li key={officer.id}>
          {officer.firstName} {officer.lastName}
          <button onClick={() => handleDelete(officer.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default ResponsibleOfficersList;

