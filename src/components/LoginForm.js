import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    navigate("/"); // Redirect to the home page after successful login
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Войти в учетную запись</h2>
      <label>
        E-mail:
        <input type="email" required />
      </label>
      <label>
        Пароль:
        <input type="password" required />
      </label>
      <button type="button-login">Войти c,lf</button>
    </form>
  );
};

export default LoginForm;
