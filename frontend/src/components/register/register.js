import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMes";
import Loading from "../loading";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassWord, setRepassWord] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    if (password !== repassWord) {
      setMessage("Passwords Do not Match!");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "/api/users",
          {
            name,
            email,
            password,
          },
          config
        );
        console.log(data);
        setLoading(false);
        localStorage.setItem("UserInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="reg_container">
        <h2 className="headReg">Registration</h2>
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          name="repassWord"
          value={repassWord}
          placeholder="Re-enter your password"
          onChange={(e) => setRepassWord(e.target.value)}
        />
        <div className="button" onClick={register}>
          Register
        </div>
        <div>or</div>
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
      </div>
    </>
  );
};

export default Register;
