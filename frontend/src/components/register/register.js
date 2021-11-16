import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorMessage from "../Errors/ErrorMes";
import Loading from "../Errors/Loading";

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
    <div className="main_reg">
      <div className="reg_container">
        <div className="reg_items">
          <div>
            <h2 className="headReg">Registration</h2>
          </div>
          <div>
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              name="repassWord"
              value={repassWord}
              placeholder="Re-enter your password"
              onChange={(e) => setRepassWord(e.target.value)}
            />
          </div>
          <div>
            <button className="reg_button" onClick={register}>
              Register
            </button>
          </div>
          <div>or</div>
          <div className="reg_login">
            <Link to="/login">Existing User ? Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
