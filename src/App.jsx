import { useState } from "react";
import "./bootstrap.min.css";
import "./App.css";

import Count from "./components/Count";
import DecreamentButton from "./components/DecreamentButton";
import IncreamentButton from "./components/IncreamentButton";

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
          <DecreamentButton decreament={decreament}></DecreamentButton>
          <IncreamentButton increament={increament}></IncreamentButton>
        </div>
      </div>
    </main>
  );
}

export default App;
