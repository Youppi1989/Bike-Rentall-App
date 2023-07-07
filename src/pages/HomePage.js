import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegistrationPage from "./RegistrationPage";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Добро пожаловать на наш сервис проката велосипедов!</h1>
      <p>Здесь вы можете арендовать велосипеды для прогулок и активного отдыха.</p>
      <div className="forms">
        <LoginForm />
        <RegistrationPage />
      </div>
      <Link to="/report-theft">Сообщить о краже</Link>
    </div>
  );
};

export default HomePage;
