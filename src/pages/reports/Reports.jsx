import React, { useEffect, useState } from "react";
import "./reports.css";
import Axios from "../../axios";

const Reports = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    Axios("/cases/", {
      method: "GET",
      headers: {
        AUTHORIZATION: "Bearer " + localStorage.getItem("token"),
      },
    }).then(({ data }) => {
      setCases(data.data);
    });
  }, []);

  function deleteCase(id) {
    Axios(`/cases/${id}`, {
      method: "DELETE",
      headers: {
        AUTHORIZATION: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(({ data }) => {
        alert("запись удалена");
      })
      .then(() => {
        Axios("/cases/", {
          method: "GET",
          headers: {
            AUTHORIZATION: "Bearer " + localStorage.getItem("token"),
          },
        }).then(({ data }) => {
          setCases(data.data);
        });
      });
  }

  return (
    <div class="hero">
      <div class="reports_wrapper">
        <div
          class="report"
          style={{
            backgroundColor: "#aaaa",
          }}
        >
          <div>
            <p>Статус:</p>
          </div>
          <div>
            <p>№ лицензии:</p>
          </div>
          <div>
            <p>ФИО:</p>
          </div>
          <div>
            <p>Велосипед:</p>
          </div>
          <div>
            <p>Дата:</p>
          </div>
          <div>
            <p>Цвет:</p>
          </div>
        </div>

        {cases.map((data, id) => {
          return (
            <div class="report" key={id}>
              <div>
                <p>{data.status}</p>
              </div>
              <div>
                <p>{data.licenseNumber}</p>
              </div>
              <div>
                <p>{data.ownerFullName}</p>
              </div>
              <div>{data.type}</div>
              <div>{new Date(data.date).toLocaleDateString()}</div>
              <div>{data.color}</div>
              <div>
                <button
                  onClick={() => deleteCase(data._id)}
                  class="delete btn"
                  style={{ background: "" }}
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

export default Reports;
