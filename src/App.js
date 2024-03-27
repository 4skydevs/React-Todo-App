// import logo from './logo.svg';
import "./App.css";
import Header from "./MyComponents/Header";
import AddTodo from "./MyComponents/AddTodo";
// import { NewApp } from "./ReactLearn/test";
// import { Todos } from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";
import TaskTable from "./MyComponents/TaskTable";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log(`i am onDelete`, todo);
    // This way of deleting wont work in react
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [isCompleted, setIsCompleted] = useState(false);

  const onToggle = (todo) => {
    // This way of deleting wont work in react
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    todo.isCompleted = !todo.isCompleted;
    setIsCompleted(!isCompleted);
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    // setIsCompleted();
    console.log(`i am on Toggle`, todo);
  };

  const addTodo = (title, desc) => {
    console.log("adding", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      isCompleted: false,
    };
    setTodos([...todos, myTodo]);
  };
  //very important funtion for consistency in faster inputs

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="TodoList" />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                {/* <Todos todos={todos} onDelete={onDelete} /> */}
                <TaskTable
                  todos={todos}
                  onDelete={onDelete}
                  onToggle={onToggle}
                />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
