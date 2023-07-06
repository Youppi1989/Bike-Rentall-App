import React from "react";

const RegistrationPage = () => {
  return (
    <form>
      <h2>Регистрация нового сотрудника</h2>
      <label>
        E-mail:
        <input type="email" required />
      </label>
      <label>
        Пароль:
        <input type="password" required />
      </label>
      <label>
        Имя:
        <input type="text" />
      </label>
      <label>
        Фамилия:
        <input type="text" />
      </label>
      <label>
        Client ID:
        <input type="text" required />
      </label>
      {/* Добавьте кнопку "Зарегистрировать" */}
    </form>
  );
};

export default RegistrationPage;
