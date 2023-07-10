import React from "react";
import { deleteOfficer, updateOfficer } from "./Api";

const ResponsibleOfficersList = ({ officers, onDelete }) => {
  const handleDelete = async (officerId) => {
    try {
      await deleteOfficer(officerId);
      onDelete(officerId);
    } catch (error) {
      console.error("Ошибка при удалении сотрудника:", error);
    }
  };

  const handleApprove = async (officerId) => {
    try {
      const updatedOfficer = await updateOfficer(officerId, { approved: true });
      // Handle the response or update the UI accordingly
    } catch (error) {
      console.error("Ошибка при одобрении сотрудника:", error);
    }
  };

  const handleRevoke = async (officerId) => {
    try {
      const updatedOfficer = await updateOfficer(officerId, {
        approved: false,
      });
      // Handle the response or update the UI accordingly
    } catch (error) {
      console.error("Ошибка при отзыве сотрудника:", error);
    }
  };

  return (
    <ul>
      {officers.map((officer) => (
        <li key={officer.id}>
          {officer.firstName} {officer.lastName}
          {officer.approved ? (
            <button onClick={() => handleRevoke(officer.id)}>Отзвать</button>
          ) : (
            <button onClick={() => handleApprove(officer.id)}>Одобрить</button>
          )}
          <button onClick={() => handleDelete(officer.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default ResponsibleOfficersList;
