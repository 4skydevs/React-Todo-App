import React, { useState } from "react";

export default function TaskTable({ todos, onDelete, onToggle }) {
  const handleToggle = (i, e) => {
    e.preventDefault();

    onToggle(i);
  };

  return (
    <>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Sno</td>
              <td>Title</td>
              <td>Desc</td>
              <td>Status</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((i) => (
              <tr key={i.sno}>
                <td>{i.sno + 1}</td>
                <td>{i.title}</td>
                <td>{i.desc}</td>
                <td>
                  <button
                    className={
                      i.isCompleted ? "btn btn-success" : "btn btn-warning"
                    }
                    onClick={(e) => {
                      handleToggle(i, e);
                    }}
                  >
                    {i.isCompleted ? "Completed" : "Pending"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      onDelete(i);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
