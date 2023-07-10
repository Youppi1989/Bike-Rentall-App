import { useEffect, useState } from "react";
import "../oficcers/officers.css";
import Axios from "../../axios";

const Officers = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios("officers", {
      method: "GET",
      headers: {
        AUTHORIZATION: "Bearer " + localStorage.getItem("token"),
      },
    }).then(({ data }) => {
      setList(data.officers);
    });
  }, []);

  function deleteOfficer(id) {
    Axios(`/officers/${id}`, {
      method: "DELETE",
      headers: {
        AUTHORIZATION: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(({ data }) => {
        alert("запись удалена");
        Axios("officers", {
          method: "GET",
          headers: {
            AUTHORIZATION: "Bearer " + localStorage.getItem("token"),
          },
        }).then(({ data }) => {
          setList(data.officers);
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <div className="hero">
      <div className="officers-wrapper">
        <div className="officers-wrapper__header">
          <span>Email</span>
          <span>Имя</span>
          <span>Фамилия</span>
          <span>Статус</span>
        </div>

        {list.map((data, id) => {
          return (
            <div key={id} className="officers-wrapper__item">
              <div>{data.email}</div>
              <div>{data.firstName ? data.firstName : "отсутствует"}</div>
              <div>{data.lastName ? data.lastName : "отсутствует"}</div>
              <div>{data.approved ? "одобрен" : "не одобрен"}</div>
              <div>
                <button
                  onClick={(e) => deleteOfficer(data._id)}
                  className="delete"
                >
                  Удалить
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Officers;
