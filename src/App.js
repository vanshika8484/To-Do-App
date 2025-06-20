import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [todolist, setTodolist] = useState([]);
  let saveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalToDoList = [...todolist, toname];
      setTodolist(finalToDoList);
    } else {
      alert("to do name already exist...");
    }
    event.preventDefault();
  };
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        key={index}
        value={value}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });
  return (
    <div className="App">
      <h1 className="Heading">To Do List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname"></input>
        <button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber);
    setTodolist(finalData);
  };
  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {indexNumber + 1}
      {". " + value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
