import { useState, useEffect } from "react";
import UserService from "../services/UserService";
import { useParams } from "react-router-dom";

const Message = () => {
  const id = useParams().id;
  const [targetCase, setCase] = useState({});
  const [officers, setOfficers] = useState([]);
  const [message, setMessage] = useState("");

  async function getCase() {
    try {
      const response = await UserService.fetchCase(id);
      setCase(response.data.data);
    } catch (e) {
      setMessage(e.response.data.message);
    }
  }

  async function getOfficers() {
    try {
      const response = await UserService.fetchOfficers();
      setOfficers(response.data.officers);
    } catch (e) {
      setMessage(e.response.data.message);
    }
  }

  useEffect(() => {
    getCase();
    getOfficers();
  }, []);

  async function handleEditCase(e) {
    setMessage("");
    e.preventDefault();
    try {
      const response = await UserService.editCase(id, targetCase);
      setMessage("Данные отправлены");
    } catch (e) {
      setMessage(e.response.data.message);
    }
  }

  return (
    <div class="container">
      <div>
        <label>Номер лицензии:</label>
        <div>
          <input
            value={targetCase.licenseNumber}
            onChange={(e) =>
              setCase({ ...targetCase, licenseNumber: e.target.value })
            }
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div>
        <label>ФИО</label>
        <div>
          <input
            value={targetCase.ownerFullName}
            onChange={(e) =>
              setCase({ ...targetCase, ownerFullName: e.target.value })
            }
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div>
        <label>Цвет</label>
        <div>
          <input
            value={targetCase.color}
            onChange={(e) => setCase({ ...targetCase, color: e.target.value })}
            type="text"
            class="form-control form-control-sm"
          />
        </div>
      </div>
      <div>
        <label>Тип</label>
        <div class="col-sm-8">
          <select
            onChange={(e) => setCase({ ...targetCase, type: e.target.value })}
            type="text"
            className="form-control form-control-sm"
          >
            <option value="sport">Спортивный</option>
            <option value="general">Горный</option>
          </select>
        </div>
      </div>
      <div>
        <label>Дата кражи</label>
        <div>
          <input
            value={targetCase.date}
            onChange={(e) => setCase({ ...targetCase, date: e.target.value })}
            type="date"
            class="form-control form-control-sm"
          />
        </div>
      </div>
      <div>
        <label>Дата заявления</label>
        <div class="col-sm-8">
          <input
            disabled
            value={targetCase.createdAt?.slice(0, 10)}
            type="text"
            class="form-control form-control-sm"
          />
        </div>
      </div>
      <div>
        <label>Дата изменения</label>
        <div class="col-sm-8">
          <input
            disabled
            value={targetCase.updatedAt?.slice(0, 10)}
            type="text"
            class="form-control form-control-sm"
          />
        </div>
      </div>
      <div>
        <label>Ответственный сотрудник</label>
        <div>
          <select
            onChange={(e) =>
              setCase({ ...targetCase, officer: e.target.value })
            }
            id="inputState"
            className="form-select"
          >
            {officers
              .filter((officer) => officer.approved)
              .map((officer) => (
                <option key={officer._id} value={officer._id}>
                  {officer.firstName} {officer.lastName} ({officer._id})
                </option>
              ))}
          </select>
        </div>
      </div>
      <div>
        <label>Доп. информация</label>
        <div>
          <text
            value={targetCase.description}
            onChange={(e) =>
              setCase({ ...targetCase, description: e.target.value })
            }
            type="text"
            class="form-control"
          ></text>
        </div>
      </div>
      <div class="row mb-4">
        <label>Статус заявления</label>
        <div className="col-sm-8">
          <select
            onChange={(e) => setCase({ ...targetCase, status: e.target.value })}
            type="text"
            className="form-control form-control-sm"
          >
            <option value="Add">Новый</option>
            <option value="in_progress">В работе</option>
            <option value="done">Исполнен</option>
          </select>
        </div>
      </div>
      {targetCase.status === "done" && (
        <div class="row mb-3">
          <label class="col-sm-4 col-form-label col-form-label-sm">
            Доп. информация
          </label>
          <div>
            <text
              value={targetCase.resolution}
              onChange={(e) =>
                setCase({ ...targetCase, resolution: e.target.value })
              }
              type="text"
              class="form-control form-control-sm"
            ></text>
          </div>
        </div>
      )}
      <button onClick={handleEditCase} class="button">
        Внести изменения
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Message;
