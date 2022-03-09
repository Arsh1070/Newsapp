import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import General from "./Components/MainScreen/General";
import Page from "./Components/Errors/NotFound";
import "./App.css";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import axios from "axios";
import LandingScreen from "./Components/LandingPage/LandingScreen";
import DashBoard from "./Components/MainScreen/DashBoard";

function App() {
  const Navigate = useNavigate();
  const [newsArray, setNewsArray] = useState([]);
  const [category, setCategory] = useState("general");
  const [token, setToken] = useState("");

  const recCatalog = (category) => {
    setCategory(category);
  };

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=5a9eb011fe414b3ab2171e0bcfa50a12`
      );
      setNewsArray(news.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
    if (token) {
      Navigate("/dashboard/general");
    } else {
      Navigate("/login");
    }
    newsApi();
  }, [category, token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<DashBoard clickedCatalog={recCatalog} />}
        >
          <Route
            path="/dashboard/general"
            element={<General gen={newsArray} category={category} />}
          />
        </Route>
        <Route path="/*" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
