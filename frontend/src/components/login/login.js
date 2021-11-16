import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../Errors/Loading";
import ErrorMessage from "../Errors/ErrorMes";
import "./Login.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    if (userInfo) {
      history.push("/general");
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
    <div className="main_log">
      <div className="log_container">
        <div className="log_items">
          <div>
            <h2 className="head_log">Login</h2>
          </div>
          <div>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
          </div>
          <div>
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
          </div>
          <div>
            <button className="log_button" onClick={submitHandler}>
              Login
            </button>
          </div>
          <div>or</div>
          <div>
            <Link to="/register">New User ? Signup here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
