import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNews from "./components/topNews";
import General from "./components/general";
import Entertainment from "./components/entertainment";
import Sports from "./components/sports";
import Business from "./components/business";
import Technology from "./components/technology";
import Science from "./components/science";
import Health from "./components/health";
import Page from "./components/notfound";
import Footer from "./components/footer";
import "./App.css";
import Navbar from "./components/navbar";
import Register from "./components/register/register";
import Login from "./components/login/login";
import axios from "axios";
import LandingScreen from "./components/landingPage/landingScreen";

function App() {
  const [head, setHead] = useState([]);
  const [bus, setBus] = useState([]);
  const [ent, setEnt] = useState([]);
  const [spo, setSpo] = useState([]);
  const [gen, setGen] = useState([]);
  const [tec, setTec] = useState([]);
  const [sci, setSci] = useState([]);
  const [hea, setHea] = useState([]);
  const url1 =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=4a9fa8a49bd44245a8f9aa3023e35bce";
  const url2 =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4a9fa8a49bd44245a8f9aa3023e35bce";
  const url3 =
    "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=4a9fa8a49bd44245a8f9aa3023e35bce";
  const url4 =
    "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=4a9fa8a49bd44245a8f9aa3023e35bce";
  const url5 =
    "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=4a9fa8a49bd44245a8f9aa3023e35bce";
  const url6 =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4a9fa8a49bd44245a8f9aa3023e35bce";
  const url7 =
    "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=4a9fa8a49bd44245a8f9aa3023e35bce";
  const url8 =
    "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=4a9fa8a49bd44245a8f9aa3023e35bce";
  useEffect(() => {
    const top = axios.get(url1);
    const buSn = axios.get(url2);
    const enTn = axios.get(url3);
    const spOr = axios.get(url4);
    const geN = axios.get(url5);
    const teC = axios.get(url6);
    const scI = axios.get(url7);
    const heA = axios.get(url8);
    axios.all([top, buSn, enTn, spOr, geN, teC, scI, heA]).then(
      axios.spread((...responses) => {
        const res1 = responses[0];
        const res2 = responses[1];
        const res3 = responses[2];
        const res4 = responses[3];
        const res5 = responses[4];
        const res6 = responses[5];
        const res7 = responses[6];
        const res8 = responses[7];
        setHead(res1.data.articles);
        setBus(res2.data.articles);
        setEnt(res3.data.articles);
        setSpo(res4.data.articles);
        setGen(res5.data.articles);
        setTec(res6.data.articles);
        setSci(res7.data.articles);
        setHea(res8.data.articles);
      })
    );
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingScreen}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <div>
          <Navbar />

          <Route exact path="/top" component={TopNews}>
            {head.map((item, index) => {
              return (
                <TopNews
                  key={index}
                  rePos1={item.title}
                  rePos2={item.urlToImage}
                  rePos3={item.url}
                />
              );
            })}
          </Route>
          <Route exact path="/general" component={General}>
            {gen.map((item, index) => {
              return (
                <General
                  key={index}
                  rePos1={item.title}
                  rePos2={item.urlToImage}
                  rePos3={item.url}
                />
              );
            })}
          </Route>
          <Route exact path="/entertainment" component={Entertainment}>
            {ent.map((item, index) => {
              return (
                <Entertainment
                  key={index}
                  rePos1={item.title}
                  rePos2={item.urlToImage}
                  rePos3={item.url}
                />
              );
            })}
          </Route>
          <Route exact path="/sports" component={Sports}>
            {spo.map((item, index) => {
              return (
                <Sports
                  key={index}
                  rePos1={item.title}
                  rePos2={item.urlToImage}
                  rePos3={item.url}
                />
              );
            })}
          </Route>
          <Route exact path="/business" component={Business}>
            {bus.map((item, index) => {
              return (
                <Business
                  key={index}
                  rePos1={item.title}
                  rePos2={item.urlToImage}
                  rePos3={item.url}
                />
              );
            })}
          </Route>
          <Route exact path="/technology" component={Technology}>
            {tec.map((item, index) => {
              return (
                <Technology
                  key={index}
                  rePos1={item.title}
                  rePos2={item.urlToImage}
                  rePos3={item.url}
                />
              );
            })}
          </Route>
          <Route exact path="/science" component={Science}>
            {sci.map((item, index) => {
              return (
                <Science
                  key={index}
                  rePos1={item.title}
                  rePos2={item.urlToImage}
                  rePos3={item.url}
                />
              );
            })}
          </Route>
          <Route exact path="/health" component={Health}>
            {hea.map((item, index) => {
              return (
                <Health
                  key={index}
                  rePos1={item.title}
                  rePos2={item.urlToImage}
                  rePos3={item.url}
                />
              );
            })}
          </Route>
          <Footer />
        </div>

        <Route component={Page}></Route>
      </Switch>
    </Router>
  );
}

export default App;
