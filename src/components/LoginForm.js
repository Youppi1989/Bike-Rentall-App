import React, { useState } from "react";
import { signIn } from "./Api.js";
import { useNavigate } from "react-router-dom";
import { createCase } from "./Api.js";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const credentials = {
        email: email,
        password: password,
      };

      await signIn(credentials);
      navigate("/"); // Redirect to the home page after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Войти в учетную запись</h2>
      {error && <p className="error-message">{error}</p>}
      <label>
        E-mail:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
