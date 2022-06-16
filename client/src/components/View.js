import React from "react";
function View(e) {
  const project = e.project;
  return (
    <>
      <div
        className="card text-bg-primary m-5 gradient-custom"
        style={{ maxWidth: "28rem", backgroundColor: "yellow" }}
      >
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <h6 className="card-title">Category</h6>
          <p className="card-text">{project.category}</p>
          <h6 className="card-title">Description</h6>
          <p className="card-text">{project.description}</p>
          <h6 className="card-title">Notes</h6>
          <p className="card-text">{project.notes}</p>
          <h6 className="card-title">Start : {project.start.substr(0, 10)}</h6>
          <h6 className="card-title">
            End &ensp;: {project.end.substr(0, 10)}
          </h6>
        </div>
      </div>
    </>
  );
}

export default View;
