import React, { useState, useEffect, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import firebase from "firebase";
import { db } from "../../Services/firebase";
import { AuthContext } from "../../Context/AuthContext";
import TodoItem from "./TodoItem";
import "./Todos.css";

function Todos() {
  const [todoInput, setTodoInput] = useState("");
  const [username, setUsername] = useState("");
  const [todos, setTodos] = useState([]);
  const authContext = useContext(AuthContext);

  //Sets authenticated username
  useEffect(() => {
    setUsername(authContext.user.username);
  }, []);

  //sets todos with previous saved todos
  useEffect(() => {
    setTodos([]);
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          isInProgress: doc.data().isInProgress,
          username: doc.data().username,
        }))
      );
    });
  }, [username]);

  //Adds todos in todos collection along with username
  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      username: username,
      isInProgress: true,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  };

  return (
    <div className="todos_container">
      <div className="todos">
        <h1>Your Reminders</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Write a reminder"
            value={todoInput}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>

        <div className="todoList">
          {/* Prints all todos along with styling */}
          {todos.map((todo) => (
            <TodoItem
              todo={todo.todo}
              id={todo.id}
              isInProgress={todo.isInProgress}
              checkUser={todo.username === username}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todos;
