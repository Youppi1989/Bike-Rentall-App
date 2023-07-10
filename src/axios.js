import axios from "axios";

const Axios = axios.create({
  baseURL: "https://sf-final-project-be.herokuapp.com/api/",
  timeout: 1000,
});

export default Axios;
