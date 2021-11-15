import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import General from "./Components/MainScreen/General";
import Page from "./Components/Errors/NotFound";
import Footer from "./Components/MainScreen/Footer";
import "./App.css";
import Navbar from "./Components/MainScreen/Navbar";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import axios from "axios";
import LandingScreen from "./Components/LandingPage/LandingScreen";

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [category, setCategory] = useState("general");

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=4a9fa8a49bd44245a8f9aa3023e35bce`
      );
      setNewsArray(news.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <div>
          <Navbar setCat={setCategory} />

          <Route exact path="/general" component={General} />
          {<General gen={newsArray} />}

          <Footer />
        </div>

        <Route component={Page} />
      </Switch>
    </Router>
  );
}

export default App;
