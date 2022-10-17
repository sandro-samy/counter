import React, { useState } from "react";
import Button from "../../components/Button";
import Count from "./counter";

const Counter = ({ count, decreament, increament }) => {
  return (
    <main className="mainContainer container vh-100 d-flex justify-content-center align-items-center">
      <div className="inner-container text-center mb-5">
        <Count count={count}></Count>
        <div className="btnxContainer">
          <Button
            action={decreament}
            text="decreament"
            className="btn-danger mx-4"
          ></Button>
          <Button
            action={increament}
            text="increament"
            className="btn-success mx-4"
          ></Button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
