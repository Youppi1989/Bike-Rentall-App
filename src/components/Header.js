import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { Context } from "..";
import logoImage from "../assets/IMG_9780 (1).PNG";

function Header() {
  const { store } = useContext(Context);
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logoImage} alt="Logo" />
      <Link to="/">
        <button className="button_main">Главная страница</button>
      </Link>
      {store.isAuth ? (
        <>
          <button disabled className="button-outline">
            {store.user.email}
          </button>
          <Link to="/">
            <button
              onClick={() => store.logout()}
              type="button"
              className="button_enter"
            >
              Выйти
            </button>
          </Link>
        </>
      ) : (
        <div className={styles.authButtons}>
          <Link to="/login">
            <button type="button" className="button">
              Вход
            </button>
          </Link>
          <Link to="/registration">
            <button type="button" className="button">
              Регистрация
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
