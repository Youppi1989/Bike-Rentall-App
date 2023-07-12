import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { Context } from "..";
import logoImage from "../assets/IMG_9780 (1).PNG";

function Header() {
  const { store } = useContext(Context);
  return (
    <header class={styles.header}>
      <img class={styles.logo} src={logoImage} alt="Logo" />
      <Link to="/">
        <button class="button">Главная страница</button>
      </Link>
      {store.isAuth ? (
        <>
          <button disabled class="button-outline">
            {store.user.email}
          </button>
          <Link to="/">
            <button onClick={() => store.logout()} type="button" class="button">
              Выйти
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <button type="button" class="button">
              Вход
            </button>
          </Link>
          <Link to="/registration">
            <button type="button" class="button">
              Регистрация
            </button>
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;
