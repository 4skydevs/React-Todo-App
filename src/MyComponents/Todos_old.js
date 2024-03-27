import React from "react";
import { TodoItem } from "./TodoItem";
export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="text-left"> Todo Items</h3>
      <hr></hr>
      <table className="table table-primary">
        <tr />
        <th>Title</th>
        <th>Description</th>
        <th>Delete</th>
        <th>Modify Customer</th>
        <tr />
      </table>
      {props.todos.length === 0
        ? "No Todos to Display"
        : props.todos.map((todo) => {
            return <TodoItem todo={todo} onDelete={props.onDelete} />;
          })}
    </div>
  );
};
