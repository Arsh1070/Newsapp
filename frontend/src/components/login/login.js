import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../loading";
import ErrorMessage from "../ErrorMes";
import "./login.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    if (userInfo) {
      history.push("/top");
    }
  }, [history]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      setLoading(false);
      localStorage.setItem("UserInfo", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="log_container">
        <h2 className="headReg">Login</h2>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button" onClick={submitHandler}>
          Login
        </div>
        <div>or</div>
        <Link to="/register">
          <button className="button">Signup</button>
        </Link>
      </div>
    </>
  );
};

export default Login;
