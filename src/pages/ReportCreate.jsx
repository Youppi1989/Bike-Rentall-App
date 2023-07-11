import React, { useReducer } from "react";
import Axios from "../axios";

const ReportCreate = () => {
  const [values, setValues] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "rename": {
          return {
            ...state,
            name: action.name,
          };
        }
        case "change_id": {
          return {
            ...state,
            licenseId: action.licenseId,
          };
        }
        case "change_color": {
          return {
            ...state,
            color: action.color,
          };
        }
        case "change_type": {
          return {
            ...state,
            vel_type: action.vel_type,
          };
        }
        case "change_date": {
          return {
            ...state,
            date: action.date,
          };
        }
        case "change_description": {
          return {
            ...state,
            description: action.description,
          };
        }
      }
    },
    {
      licenseId: "",
      name: "",
      vel_type: "general",
      color: "",
      date: "2023.01.01",
      description: "",
    }
  );
  console.log(values);
  function submitHandler(e) {
    e.preventDefault();

    Axios("/cases/", {
      method: "post",
      data: {
        ownerFullName: values.name,
        licenseNumber: values.licenseId,
        type: values.vel_type,
        color: values.color,
        date: values.date,
        description: values.description,
      },
      headers: {
        AUTHORIZATION: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(({ data }) => {
        alert("Запись создана");
        console.log(values);
      })
      .catch((e) => {
        console.log(e.message);
        alert("Не удалось создать запись");
      });
  }

  return (
    <div className="hero">
      <form
        action="#"
        onSubmit={(e) => submitHandler(e)}
        className="form_signup"
      >
        <div className="form_input form_license_number">
          <label for="license_number">Номер лицензии</label>
          <input
            value={values.licenseId}
            onChange={(e) => {
              setValues({ type: "change_id", licenseId: e.target.value });
            }}
            type="text"
            name="license_number"
          />
        </div>
        <div className="form_input form_full_name">
          <label for="full_name">ФИО:</label>
          <input
            onChange={(e) => {
              setValues({ type: "rename", name: e.target.value });
            }}
            value={values.name}
            type="text"
            name="full_name"
          />
        </div>
        <div
          style={{
            display: "flex",
          }}
          className="form_input form_first_name"
        >
          <label for="type">Тип велосипеда:</label>
          <select
            name="type"
            onChange={(e) => {
              setValues({ type: "change_type", vel_type: e.target.value });
            }}
            className="form_input"
          >
            <option value="general">"Классический"</option>
            <option value="sport">"Спортивный"</option>
            <option value="sport">"Горный"</option>
          </select>
        </div>
        <div className="form_input form_color">
          <label for="color">Цвет:</label>
          <input
            onChange={(e) => {
              setValues({ type: "change_color", color: e.target.value });
            }}
            value={values.color}
            type="text"
            name="color"
          />
        </div>
        <div className="form_input calendar_info">
          <label for="date">Выберите дату:</label>
          <input
            value={values.date.replaceAll(".", "-")}
            onChange={(e) => {
              setValues({ type: "change_date", date: e.target.value });
            }}
            type="date"
            id="calendar_date"
            name="date"
          />
        </div>
        <div class="form_input form_description">
          <span>Описание: </span>
          <textarea
            style={{}}
            value={values.description}
            onChange={(e) => {
              setValues({
                type: "change_description",
                description: e.target.value,
              });
            }}
            className="description_text"
            type="text"
            name="description"
          ></textarea>
        </div>
        <button class="click">Отправить</button>
      </form>
    </div>
  );
};

export default ReportCreate;
