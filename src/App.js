//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [list, setList] = useState([]);

  let [todoText, setTodoText] = useState("");
  let updateTodoText = (e) => {
    setTodoText(e.target.value);
  };

  let addToDo = () => {
    const newList = [todoText, ...list];
    setList(newList);

    setTodoText("");
  };

  return (
    <div>
      <h2 className="bg-dark text-light p-3" style={{ textAlign: "center" }}>
        📝 ToDoList 📝
      </h2>

      <div className="row">
        <div className="col-9">
          <input
            type="text"
            value={todoText}
            onChange={updateTodoText}
            className="form-control form-control-lg"
            placeholder="Enter your task"
          />
        </div>

        <div className="col-3">
          <input
            type="button"
            className="btn btn-lg btn-secondary"
            value="Add Todo"
            onClick={addToDo}
          />
        </div>
      </div>

      {list.map((item, index) => (
        <div key={index} className="alert alert-secondary my-2">
          {item}
        </div>
      ))}
      {list.length == 0 && (
        <div className="alert alert-dark my-1">You have no Pending Task</div>
      )}
    </div>
  );
}

export default App;
