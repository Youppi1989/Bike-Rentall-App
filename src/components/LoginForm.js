import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../components/Api";

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await signIn(credentials);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      setError("Неверный адрес электронной почты или пароль");
      console.log("Ошибка аутентификации пользователя:", error.message);
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Войти в учетную запись</h2>
      <label>
        E-mail:
        <input type="email" name="email" required />
      </label>
      <label>
        Пароль:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Войти</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;
