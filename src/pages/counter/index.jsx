import React, { useState } from "react";
import Button from "../../components/Button";
import Count from "./counter";
import { decrement, increment } from "../../store/counterSlice";
import { useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <main className="mainContainer container vh-100 d-flex justify-content-center align-items-center">
      <div className="inner-container text-center mb-5">
        <Count></Count>
        <div className="btnxContainer">
          <Button
            action={() => dispatch(decrement())}
            text="decreament"
            className="btn-danger mx-4"
          ></Button>
          <Button
            action={() => dispatch(increment())}
            text="increament"
            className="btn-success mx-4"
          ></Button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
