import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Axios from "./axios";
import { useDispatch, useSelector } from "react-redux";
import { login, removeUserData } from "./redux/userSlice/slice";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/signup/Signup";
import Auth from "./pages/Auth";
import ReportCreate from "./pages/ReportCreate";
import Reports from "./pages/reports/Reports";
import Officers from "./pages/oficcers/Officers";

const App = () => {
  const state = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state.data && token) {
      Axios("/auth/", {
        method: "get",
        headers: {
          AUTHORIZATION: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then(({ data }) => {
          dispatch(login(data.data));
        })
        .catch((e) => {});
    }
  }, []);

  return (
    <div>
      <header class="header">
        <div></div>

        <div class="menu">
          {state.status !== "null" ? (
            <>
              <Link to="/officers" class="click">
                Офицеры
              </Link>
              <Link to="/reports/" class="click">
                Посмотреть список краж
              </Link>
            </>
          ) : null}
        </div>

        {state.data === null ? (
          <>
            <div class="nav_enter">
              <Link to="/auth">
                <button class="enter">Войти</button>
              </Link>
              <Link to="/signup">
                <button class="enter">Зарегистрироваться</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <span
                style={{
                  marginRight: "18px",
                  fontSize: "14px",
                }}
              >
                {`${state.data.user.firstName}`}
              </span>
              <button
                onClick={() => {
                  dispatch(removeUserData());
                  localStorage.removeItem("token");
                }}
                class="click"
              >
                Выйти
              </button>
            </div>
          </>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/reports/create" element={<ReportCreate />}></Route>
          <Route path="/officers" element={<Officers />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <main>
        <section class="hero-section">
          <div class="main">
            <div class="title-container">
              <h1 class="title">
                Добро пожаловать на наш сервис проката велосипедов!
              </h1>
              <Link to="/reports/create" class="click_thief">
                Сообщить о краже велосипеда
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">Велосипед - ваш друг!</footer>
    </div>
  );
};

export default App;
