import React, { useState } from "react";
import "./signup.css";

import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("firstname");
  const [lastName, setLastName] = useState("lastname");
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("12345");

  const registrationHandler = (e) => {
    e.preventDefault();
    axios("https://sf-final-project-be.herokuapp.com/api/auth/sign_up", {
      method: "POST",
      data: {
        clientId: "bff396d9-12dc-4ca9-87a4-eda59e8d247f",
        email,
        firstName,
        lastName,
        password,
      },
    })
      .then(({ data }) => {
        alert("Вы успешно зарегестрированы");
      })
      .catch((e) => {
        alert("Ошибка");
        console.log(e.message);
      });
  };

  return (
    <main>
      <div className="hero">
        <form
          onSubmit={(e) => registrationHandler(e)}
          action="#"
          className="form_signup"
        >
          <div className="form_input form_email">
            <label for="email">E-mail*</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
            />
          </div>
          <div className="form_input form_password">
            <label for="password">Пароль*</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value="12345"
              type="password"
              name="password"
            />
          </div>
          <div className="form_input form_first_name">
            <label for="first_name">Имя</label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
              type="text"
              name="first_name"
            />
          </div>
          <div className="form_input form_last_name">
            <label for="last_name">фамилия</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
              type="text"
              name="last_name"
            />
          </div>
          <div className="form_input form_client-id">
            <label for="client-id">Client ID*</label>
            <input
              value="bff396d9-12dc-4ca9-87a4-eda59e8d247f"
              type="text"
              name="client-id"
            />
          </div>
          <button
            style={{
              width: "100%",
              padding: "20px",
            }}
            className="btn"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
