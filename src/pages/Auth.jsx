import React, { useState } from "react";
import Axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, login, removeUserData } from "../redux/userSlice/slice";
import { Navigate } from "react-router-dom";

const Auth = () => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("trotsenko_nik@mail.ru");
  const [password, setPassword] = useState("12345");

  function getAuth(e) {
    e.preventDefault();

    Axios({
      method: "post",
      url: "/auth/sign_in",
      data: {
        email,
        password,
      },
    })
      .then(({ data }) => {
        if (data.status !== "OK") {
          alert("Ошибка авторизации!");
        } else {
          alert("Вы авторизированы");
          dispatch(login(data.data));
        }
      })
      .catch((e) => {
        alert("Вы не авторизованы");
        console.log(e.message);
      });
  }

  return (
    <main>
      {user ? <Navigate to="/"></Navigate> : null}
      <div class="hero">
        <form onSubmit={(e) => getAuth(e)} action="#" class="form_signup">
          <div class="form_input form_email">
            <label for="email">E-mail:</label>
            <input
              placeholder="почта"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              name="email"
              required
            />
          </div>
          <div class="form_input form_password">
            <label for="password">Пароль:</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              placeholder="пароль"
              type="password"
              name="password"
              required
            />
          </div>
          <button
            style={{
              width: "100%",
            }}
            class="click"
        
          >
            Войти
          </button>
        </form>
      </div>
    </main>
  );
};

export default Auth;
