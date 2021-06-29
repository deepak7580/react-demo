import logo from "./logo.svg";
import "./App.css";

const App = () => {
  let fruitList = [
    "Apple",
    "Mango",
    "DragonFruit",
    "PassionFruit",
    "tomato",
    "Banana",
  ];
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
    </div>
  );
};

export default App;
