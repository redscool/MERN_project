import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import config from "../config.json";
import React from "react";
import { useNavigate } from "react-router-dom";
const url = config.url;
function Profile() {
  console.log("profile");
  const [user, setuser] = useState({
    name: "",
    email: "",
    occupation: "",
    experience: "",
    company: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });
  const navigate = useNavigate();
  const helper = async () => {
    console.log("profile");
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    console.log(token);
    console.log(email);
    if (token === null || email === null) return navigate("/login");
    await axios
      .post(
        url + "/profile",
        { email },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log("Asasas");
        console.log(res);
        if (res.data.success === false) return navigate("/login");
        const user = res.data.user;
        setuser(user);
        console.log(user);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  };
  useEffect(() => {
    helper();
  }, []);
  return (
    <div className="container">
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white pt-5"
                    style={{
                      "borderTopLeftRadius: .5rem; borderBottomLeftRadius":
                        ".5rem",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5 mt-5"
                      style={{ width: "80px" }}
                    />
                    <h5>{user.name}</h5>
                    <p>{user.occupation}</p>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-2" />
                      <div className="row pt-1">
                        <div className="col-7 mb-1">
                          <h6>Email</h6>
                          <p className="text-muted">{user.email}</p>
                        </div>
                        <div className="col-5 mb-1">
                          <h6>Phone</h6>
                          <p className="text-muted">{user.mobile}</p>
                        </div>
                      </div>
                      <h6>Resident</h6>
                      <hr className="mt-0 mb-2" />
                      <div className="row pt-1">
                        <div className="col-7 mb-1">
                          <h6>Address</h6>
                          <p className="text-muted">{user.address}</p>
                        </div>
                        <div className="col-5 mb-1">
                          <h6>City</h6>
                          <p className="text-muted">{user.city}</p>
                        </div>
                        <div className="col-7 mb-1">
                          <h6>State</h6>
                          <p className="text-muted">{user.state}</p>
                        </div>
                        <div className="col-5 mb-1">
                          <h6>Country</h6>
                          <p className="text-muted">{user.country}</p>
                        </div>
                        <h6>Work experience</h6>
                        <hr className="mt-0 mb-2" />
                        <div className="row pt-1">
                          <div className="col-7 mb-1">
                            <h6>Company</h6>
                            <p className="text-muted">{user.company}</p>
                          </div>
                          <div className="col-5 mb-1">
                            <h6>Years of experience</h6>
                            <p className="text-muted">{user.experience}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
