import React from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../components/Api";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    // Create the user data object
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
      clientId: e.target.clientId.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    };

    try {
      // Call the API to register the user
      await signUp(userData);
      navigate("/responsible-officers");
    } catch (error) {
      console.log("Error registering user:", error.message);
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <h2>Регистрация</h2>
      <label>
        E-mail:
        <input type="email" name="email" required />
      </label>
      <label>
        Пароль:
        <input type="password" name="password" required />
      </label>
      <label>
        Имя:
        <input type="text" name="firstName" />
      </label>
      <label>
        Фамилия:
        <input type="text" name="lastName" />
      </label>
      <label>
        Client ID:
        <input type="text" name="clientId" required />
      </label>
      <button type="submit">Зарегистрировать</button>
    </form>
  );
};

export default RegistrationPage;
