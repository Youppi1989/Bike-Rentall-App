import React from "react";
import "./App.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/LoginForm";
import TheftReportForm from "./components/TheftReportForm";
import RegistrationPage from "./pages/RegistrationPage";
import TheftReportsList from "./components/TheftReportsList";
import TheftReportDetailsPage from "./pages/TheftReportDetailsPage";
import ResponsibleOfficersList from "./components/ResponsibleOfficersList";
import OfficerDetailsPage from "./pages/OfficerDetailsPage";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/report-theft" element={<TheftReportForm />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/theft-reports" element={<TheftReportsList />} />
          <Route
            path="/theft-report/:id"
            element={<TheftReportDetailsPage />}
          />
          <Route
            path="/responsible-officers"
            element={<ResponsibleOfficersList />}
          />
          <Route path="/officer/:id" element={<OfficerDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
