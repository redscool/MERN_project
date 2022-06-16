import View from "./View";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
import React from "react";
const url = config.url;
function List() {
  const navigate = useNavigate();
  const [projects, setprojects] = useState([]);
  const helper = async () => {
    console.log("lsit");
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    // console.log(token);
    // console.log(email);
    if (email === null || token === null) return navigate("/login");
    await axios
      .post(
        url + "/getprojects",
        { email },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        // console.log("Asasas");
        // console.log(res);
        if (res.data.success === false) return navigate("/login");
        const projects = res.data.projects;
        setprojects(projects);
        // console.log(projects);
        // console.log(data);
      })
      .catch((error) => {
        // console.log(error);
        navigate("/login");
      });
  };
  useEffect(() => {
    helper();
    console.log(projects);
  }, []);
  return (
    <div className="card-group">
      {projects.map((e) => {
        return <View project={e} />;
      })}
    </div>
  );
}

export default List;
