import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Main from "./components/Main";
import Signup from "./pages/signup/Signup";
import Auth from "./pages/Auth";
import ReportCreate from "./pages/ReportCreate";
import Reports from "./pages/reports/Reports";
import Officers from "./pages/oficcers/Officers";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/reports/create" element={<ReportCreate />}></Route>
          <Route path="/officers" element={<Officers />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
