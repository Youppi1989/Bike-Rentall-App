import React, { useContext } from "react";
import { Context } from "../index";
import { Link } from "react-router-dom";

const Main = () => {
  const { store } = useContext(Context);
  return (
    <main class=" container container-main">
      {store.isAuth ? (
        <>
          <Link to="/newcase">
            <button class="button">Заявить о краже</button>
          </Link>
          <Link to="/cases">
            <button class="button">Сообщения о кражах</button>
          </Link>
          <Link to="/officers">
            <button class="button">Ответственные сотрудники</button>
          </Link>
        </>
      ) : (
        <div class="card">
          <div class="card-body">
            <p class="text">
              Добро пожаловать на наш сайт проката велосипедов.Возможно вы
              столкнулись с кражей, мы вам поможем!
            </p>
            <Link to="/newcase">
              <button type="button" class="button">
                У меня украли велосипед
              </button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
