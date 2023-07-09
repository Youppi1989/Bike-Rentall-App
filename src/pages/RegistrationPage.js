import React from "react";

const RegistrationPage = () => {
  const handleRegistration = (e) => {
    e.preventDefault();
    // Perform registration logic here
  };

  return (
    <form onSubmit={handleRegistration}>
      <h2>Регистрация</h2>
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
      <button type="submit">Зарегистрировать</button>
    </form>
  );
};

export default RegistrationPage;
