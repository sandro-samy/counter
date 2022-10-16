import { useState } from "react";
import "./bootstrap.min.css";
import "./App.css";
import Count from "./components/Count";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount((prev) => prev + 1);
  };

  const decreament = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <main className="mainContainer container vh-100 d-flex justify-content-center align-items-center">
      <div className="inner-container text-center mb-5">
        <Count count={count}></Count>
        <div className="btnxContainer">
          <Button
            action={decreament}
            text="decreament"
            color="btn-danger"
          ></Button>
          <Button
            action={increament}
            text="increament"
            color="btn-success"
          ></Button>
        </div>
      </div>
    </main>
  );
}

export default App;
