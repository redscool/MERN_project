import { useState } from "react";
import axios from "axios";
import config from "../config.json";
import React from "react";
import { useNavigate } from "react-router-dom";
const url = config.url;
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const loginApi = async (e) => {
    e.preventDefault();
    console.log("hi from login");
    await axios
      .post(url + "/login", { email, password })
      .then((res) => {
        console.log("Asasas");
        console.log(res);
        if (res.data.success === false) window.alert("Invalid credentials");
        else {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", res.data.email);
          console.log(localStorage.getItem("token"));
          window.alert("Login Successfully");
          navigate("/profile");
        }
      })
      .catch((err) => {
        window.alert("Invalid credentials");
        console.log(err);
      });
  };
  return (
    <div className="container  d-flex flex-row">
      <div className="row justify-content-start">
        <div className="col-sm">
          <img src="/bg.jpg" alt="" className="img-fluid" />
        </div>
        <div className="col-sm">
          <label className="form-label fs-1 text mt-5">Login</label>
          <form className="row g-3 needs-validation">
            <div className="col-md-8 mt-5">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="col-md-8 mt-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <div className="col-12 mt-5 mb-6">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={(e) => loginApi(e)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
