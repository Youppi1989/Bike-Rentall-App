import React, { useEffect } from "react";
import Axios from "../axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, removeUserData } from "../redux/userSlice/slice";

const Header = () => {
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
    <header className="header">
      <div></div>

      <div className="theft">
        <Link to="/reports/create" class="click">
          Сообщить о краже велосипеда
        </Link>
        {state.status !== "null" ? (
          <>
            <Link to="/officers" class="click">
              Офицеры
            </Link>
            <Link to="/reports/" class="click">
              Посмотреть список краж{" "}
            </Link>
          </>
        ) : null}
      </div>

      {state.data === null ? (
        <>
          <div class="nav_btn">
            <Link to="/auth">
              <button className="btn">Войти</button>
            </Link>
            <Link to="/signup">
              <button class="btn">Зарегистрироваться</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <span
              style={{
                marginRight: "20px",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >{`${state.data.user.firstName}`}</span>
            <button
              onClick={() => {
                dispatch(removeUserData());
                localStorage.removeItem("token");
              }}
              className="btn"
            >
              ВЫЙТИ
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
