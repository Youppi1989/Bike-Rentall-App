import axios from "axios";

const API_BASE_URL = "https://sf-final-project-be.herokuapp.com/api";

const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Токен авторизации не найден");
  }
  return token;
};

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/sign_up`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signIn = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/sign_in`,
      credentials
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const verifyToken = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createTheftReport = async (theftReportData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/public/report`,
      theftReportData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createCase = async (caseData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cases`, caseData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateCase = async (caseId, caseData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/cases/${caseId}`,
      caseData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteCase = async (caseId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/cases/${caseId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getAllCases = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cases`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCaseById = async (caseId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cases/${caseId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createOfficer = async (officerData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/officers`, officerData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateOfficer = async (officerId, officerData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/officers/${officerId}`,
      officerData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteOfficer = async (officerId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/officers/${officerId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getAllOfficers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/officers`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getOfficerById = async (officerId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/officers/${officerId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
