import { useState } from "react";
import axios from "axios";
import config from "../config.json";
import React from "react";
import { useNavigate } from "react-router-dom";
const url = config.url;
function Addproject() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const [project, setproject] = useState({
    name: "",
    description: "",
    category: "",
    start: "",
    end: "",
    notes: "",
  });
  let name, value;
  const helper = (e) => {
    name = e.target.name;
    value = e.target.value;
    setproject({ ...project, [name]: value });
  };
  const addprojectApi = async (e) => {
    e.preventDefault();
    if (!email) {
      window.alert("Login first");
      return;
    }
    await axios
      .post(
        url + "/addproject",
        { ...project, email },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.success === false) window.alert("Invalid details");
        else {
          window.alert("Project added Successfully");
          navigate("/list");
        }
      })
      .catch((err) => {
        window.alert("Invalid credentials");
        console.log(err);
      });
  };
  return (
    <div className="container p-5 ml-auto mr-auto">
      <label className="form-label fs-1 text">Add Project</label>
      <form className="row g-3 needs-validation">
        <div className="col-md-3">
          <label className="form-label">Project Name</label>
          <input
            type="text"
            className="form-control"
            value={project.name}
            name="name"
            onChange={(e) => helper(e)}
            required
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            value={project.category}
            name="category"
            onChange={(e) => helper(e)}
            required
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            value={project.start}
            name="start"
            onChange={(e) => helper(e)}
            required
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            value={project.end}
            name="end"
            onChange={(e) => helper(e)}
            required
          />
        </div>

        <div className="col-md-8">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={project.description}
            name="description"
            onChange={(e) => helper(e)}
          ></textarea>
        </div>

        <div className="col-md-8">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            rows="3"
            value={project.notes}
            name="notes"
            onChange={(e) => helper(e)}
          ></textarea>
        </div>

        <div className="col-12 mt-5">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => addprojectApi(e)}
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addproject;
