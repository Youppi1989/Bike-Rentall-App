import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "./Api";

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create the credentials object
    const credentials = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      // Call the API to authenticate the user
      const response = await signIn(credentials);
      // Handle the response, e.g., store the token in localStorage
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (error) {
      setError("Неверный адрес электронной почты или пароль");
      console.log("Error authenticating user:", error.message);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
