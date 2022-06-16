import { useState } from "react";
import axios from "axios";
import config from "../config.json";
import React from "react";
import { useNavigate } from "react-router-dom";
const url = config.url;
function Signup() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
    company: "",
    occupation: "",
    experience: "",
  });
  let name, value;
  const helper = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const signupApi = async (e) => {
    e.preventDefault();
    await axios
      .post(url + "/signup", user)
      .then((res) => {
        if (res.data.success === false) window.alert("Invalid details");
        else {
          window.alert("signup Successfully");
          navigate("/login");
        }
      })
      .catch((err) => {
        window.alert("Invalid credentials");
        console.log(err);
      });
  };
  console.log(user);
  return (
    <div className="container p-5">
      <label className="form-label fs-1 text">Signup</label>
      <div className="row g-3 needs-validation">
        <div className="col-md-4">
          <label className="form-label">Name</label>
          <input
            spellCheck="false"
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={(e) => helper(e)}
            required
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Email</label>
          <input
            spellCheck="false"
            type="text"
            className="form-control"
            name="email"
            value={user.email}
            onChange={(e) => helper(e)}
            required
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Password</label>
          <input
            spellCheck="false"
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={(e) => helper(e)}
            required
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Address</label>
          <input
            spellCheck="false"
            type="text"
            className="form-control"
            name="address"
            required
            value={user.address}
            onChange={(e) => helper(e)}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">City</label>
          <input
            spellCheck="false"
            type="text"
            className="form-control"
            value={user.city}
            name="city"
            onChange={(e) => helper(e)}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">State</label>
          <input
            spellCheck="false"
            type="text"
            className="form-control"
            value={user.state}
            name="state"
            onChange={(e) => helper(e)}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Country</label>
          <input
            spellCheck="false"
            type="text"
            className="form-control"
            value={user.country}
            name="country"
            onChange={(e) => helper(e)}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Mobile</label>
          <input
            spellCheck="false"
            type="text"
            value={user.mobile}
            name="mobile"
            className="form-control"
            onChange={(e) => helper(e)}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Occupation</label>
          <input
            name="occupation"
            value={user.occupation}
            onChange={(e) => helper(e)}
            spellCheck="false"
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Company</label>
          <input
            name="company"
            value={user.company}
            onChange={(e) => helper(e)}
            spellCheck="false"
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Experience</label>
          <input
            name="experience"
            value={user.experience}
            onChange={(e) => helper(e)}
            spellCheck="false"
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="col-12 mt-5">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => signupApi(e)}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
