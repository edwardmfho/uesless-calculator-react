import "./styles.css";
import { useEffect, useState } from "react";

//{
//   "n1":1.1,
//   "n2":2.2
// }

export default function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [newValue, setNewValue] = useState(0);
  const [setCalculation] = useState();

  var calculation = function (currentValue, newValue, calculate) {
    if (calculate === "add") {
      console.log("add");
      // https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/add
    } else if (calculate === "subtract") {
      console.log("subtract");
      // https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/subtract
    } else if (calculate === "multiply") {
      console.log("multiply");
      // https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/multiply
    } else if (calculate === "divide") console.log("divide");
    // https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/divide
  };

  return (
    <div className="App">
      <div id="root">
        <div className="App">
          {<h3 className="">{currentValue}</h3>}
          <h3> *</h3>
          {<h3 className="">{newValue}</h3>}
          <div>
            <button
              className=""
              onClick={() => setNewValue(currentValue * 10 + 7)}
            >
              {" "}
              7{" "}
            </button>
            <button
              className=""
              onClick={() => setNewValue(currentValue * 10 + 8)}
            >
              {" "}
              8{" "}
            </button>
            <button
              className=""
              onClick={() => setNewValue(currentValue * 10 + 9)}
            >
              {" "}
              9{" "}
            </button>
          </div>
          <div>
            <button
              className=""
              onClick={() => setNewValue(currentValue * 10 + 4)}
            >
              {" "}
              4{" "}
            </button>
            <button
              className=""
              onClick={() => setNewValue(currentValue * 10 + 5)}
            >
              {" "}
              5{" "}
            </button>
            <button
              className=""
              onClick={() => setNewValue(currentValue * 10 + 6)}
            >
              {" "}
              6{" "}
            </button>
          </div>
          <div>
            <button
              className=""
              onClick={() => setNewValue(currentValue * 10 + 1)}
            >
              {" "}
              1{" "}
            </button>
            <button
              className=""
              onClick={() => setNewValue(currentValue * 10 + 2)}
            >
              {" "}
              2{" "}
            </button>
            <button
              className=""
              onClick={() => setNewValue(currentValue * 10 + 3)}
            >
              {" "}
              3{" "}
            </button>
          </div>
          <div>
            <button
              className=""
              onClick={() => setNewValue(currentValue * 10 + 0)}
            >
              {" "}
              0{" "}
            </button>
          </div>
          <div>
            <button className="" onClick={() => setCalculation("add")}>
              {" "}
              +{" "}
            </button>
            <button className="" onClick={() => setCalculation("subtract")}>
              {" "}
              -{" "}
            </button>
            <button className="" onClick={() => setCalculation("multiply")}>
              {" "}
              *{" "}
            </button>
            <button className="" onClick={() => setCalculation("divide")}>
              {" "}
              /{" "}
            </button>
          </div>
          <div>
            <button className=""> = </button>
            <button className="" onClick={() => setNewValue(0)}>
              {" "}
              C{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
