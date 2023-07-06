import React from "react";

// Компонент для отображения списка ответственных сотрудников
const ResponsibleOfficersList = ({ officers, onDelete }) => {
  return (
    <ul>
      {officers.map((officer) => (
        <li key={officer.id}>
          {officer.firstName} {officer.lastName}
          <button onClick={() => onDelete(officer.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default ResponsibleOfficersList;
