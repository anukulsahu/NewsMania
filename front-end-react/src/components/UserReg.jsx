import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

export default function UserReg() {
  const [email, setEmail] = useState(""); // Fix state variable name
  const [password, setPassword] = useState(""); // Fix state variable name
  let navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:6681/news/login", {
        email: email,
        password: password,
      });
      if (res.data.message === "Email not exists") {
        alert("Email not exists");
      } else if (res.data.message === "Login Success") {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      } else if (res.data.message === "Password not matched") {
        alert("Entered password is incorrect");
      } else {
        alert("Incorrect Email and password not match");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container2">
      <center>
        <h2>User Login</h2>
      </center>
      <form onSubmit={(e) => login(e)}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <input type="submit" value="Login" />

        <Link className="btn btn-dark btn-sm my-2" to="/adduser">
          Register here
        </Link>
      </form>
    </div>
  );
}
