import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:6681/news/addusers", {
        name: name,
        email: email,
        password: password,
      });
      if (response.data !== "Not Found") {
        alert(response.data + " you succesfully registered");
        navigate("/");
      } else {
        alert("Fill properly");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container2">
      <center>
        <h3>Just Say Your Details</h3>
      </center>
      <form onSubmit={(e) => onSubmit(e)}>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <center>
          <button type="submit" class="btn btn-light my-4">
            Click to register
          </button>
          <Link type="button" class="btn btn-danger mx-2" to="/">
            Cancel
          </Link>
        </center>
      </form>
    </div>
  );
}
