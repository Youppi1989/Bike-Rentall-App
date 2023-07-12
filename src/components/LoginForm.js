import React, { useContext, useState } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    await store.login(email, password);
    setMessage(store.message);
  }

  return (
    <form class="container">
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="login"></span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          className="form-control"
          placeholder="E-mail"
          aria-label="Username"
          aria-describedby="login"
        />
      </div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="password"></span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          placeholder="Пароль"
          aria-label="Username"
          aria-describedby="password"
        />
      </div>

      <div class="container">
        <Link to="/">
          <button onClick={handleLogin} class="button">
            Вход
          </button>
        </Link>
        <Link to="/registration">
          <button class="button">Регистрация</button>
        </Link>
      </div>
      <p class="container">{message}</p>
    </form>
  );
};

export default observer(LoginForm);
