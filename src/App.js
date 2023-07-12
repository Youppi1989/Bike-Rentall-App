import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import Header from "./components/Header";
import RegisterForm from "./components/RegisterForm";
import Main from "./components/Main";
import NewMessage from "./components/NewMessage";
import Cases from "./components/Cases";
import Message from "./components/Message";
import Officers from "./components/Officers";
import Officer from "./components/Officer";
import Footer from "./components/Footer";

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    <div className="App">
      <Header />
      {store.isLoading ? (
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      ) : store.isAuth ? (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/newcase" element={<NewMessage />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<Message />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/officers/:id" element={<Officer />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/newcase" element={<NewMessage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registration" element={<RegisterForm />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default observer(App);
