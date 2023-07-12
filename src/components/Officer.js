import { useState, useEffect } from "react";
import UserService from "../services/UserService";
import { useParams } from "react-router-dom";

const Officer = () => {
  const id = useParams().id;
  const [officer, setOfficer] = useState({});
  const [message, setMessage] = useState("");

  async function getOfficer() {
    try {
      const response = await UserService.fetchOfficer(id);
      setOfficer(response.data.data);
    } catch (e) {
      setMessage(e.response.data.message);
    }
  }

  useEffect(() => {
    getOfficer();
  }, []);

  async function handleEditOfficer(e) {
    setMessage("");
    e.preventDefault();
    const data = {
      firstName: officer.firstName,
      lastName: officer.lastName,
      approved: officer.approved,
    };
    if (officer.password.length <= 20 && officer.password.length > 2) {
      data.password = officer.password;
    }
    try {
      const response = await UserService.editOfficer(id, data);
      setMessage("Данные успешно отправлены");
    } catch (e) {
      setMessage(e.response.data.message);
    }
  }

  return (
    <div class="container">
      <div>
        <label>Имя</label>
        <div>
          <input
            value={officer.firstName}
            onChange={(e) =>
              setOfficer({ ...officer, firstName: e.target.value })
            }
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div>
        <label>Фамилия</label>
        <div>
          <input
            value={officer.lastName}
            onChange={(e) =>
              setOfficer({ ...officer, lastName: e.target.value })
            }
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <input
            disabled
            value={officer.email}
            type="email"
            className="form-control"
          />
        </div>
      </div>
      <div>
        <label>Изменить пароль</label>
        <div>
          <input
            value={officer.password?.length > 20 ? "" : officer.password}
            onChange={(e) =>
              setOfficer({ ...officer, password: e.target.value })
            }
            type="password"
            class="form-control"
          />
        </div>
      </div>
      <div>
        <input
          type="radio"
          className="btn-check"
          name="options-outlined"
          id="success-outlined"
          checked={officer.approved}
          onChange={(e) => {
            setOfficer({ ...officer, approved: e.target.value === "on" });
          }}
        />
        <label>Одобрен</label>

        <input
          type="radio"
          className="btn-check"
          name="options-outlined"
          id="danger-outlined"
          checked={!officer.approved}
          onChange={(e) => {
            setOfficer({ ...officer, approved: e.target.value !== "on" });
          }}
        />
        <label>Не подтвержден</label>
      </div>
      <div>
        <button
          onClick={handleEditOfficer}
          className="btn btn-primary btn-lg btn-block"
        >
          Внести изменения
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Officer;
