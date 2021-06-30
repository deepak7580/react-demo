import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  let fruitList = [
    "Apple",
    "Mango",
    "DragonFruit",
    "PassionFruit",
    "tomato",
    "lichi",
  ];
  let [counter, setCounter] = useState(10);

  const increment = () => {
    // counter += 1;
    setCounter(counter + 1);
    console.log("I AM INCREMENT FUNCTION", counter);
  };
  return (
    <div>
      <h1>
        <u>List of fruits</u>:-
      </h1>
      {fruitList.map((item) => (
        <ul>
          <li>
            <h3>{item}</h3>
          </li>
        </ul>
      ))}
      <input type="button" value="INCREMENT" onClick={increment} />
      <input type="text" value={counter}></input>
    </div>
  );
};

export default App;
