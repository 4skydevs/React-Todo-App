import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  let Style = {};
  return (
    <div className="container">
      <table className="table table-secondary" style={Style}>
        <tr />
        <td>{todo.title}</td>
        <td>{todo.desc}</td>
        <td />
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
        <td />
        <tr />
      </table>
    </div>
  );
};
