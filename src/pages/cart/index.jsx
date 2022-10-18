import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, decrementItem, removeItem } from "../../store/cartSlice";
import { decrement, increment } from "../../store/counterSlice";

import styles from "./cart.module.css";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  console.log(totalQuantity);
  return (
    <div className="container main-container">
      {totalQuantity === 0 ? (
        <div className="empty-container">
          <div className="container-lg container-fluid text-container text-center mb-5">
            <h2 className="fs-1">Cart Empty</h2>
            <p>Your Shopping Cart is Empty.</p>
            <Link to="/" className="text-decoration-none fs-5">
              Go to Store <i className="fa-cart"></i>{" "}
            </Link>
          </div>
          <div className={`${styles.imageContainer} m-auto`}>
            <img src="./cart.svg" className="w-100" alt="Empty Cart" />
          </div>
        </div>
      ) : (
        <div className="cart-container">
          <div className="container row pb-3">
            <Link className="pointer fs-5 text-dark" to={"/"}>
              <i className="fa-solid fa-arrow-left-long"></i> Back to Store
            </Link>
          </div>
          <h2 className="text-center mb-5">Cart Items</h2>
          <table className="table mb-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item) => (
                  <tr className="align-items-center" key={item.id}>
                    <th scope="row justify-content-center align-items-center">
                      {item.id}
                    </th>
                    <td className="cell col justify-content-center align-items-center">
                      <img src={item.image} className="h-100" alt={item.name} />
                    </td>
                    <td className={`${styles.cell} col`}>{item.name}</td>
                    <td className={`${styles.cell} col`}>{item.price}</td>
                    <td className={`${styles.cell} col`}>
                      <div className="w-75 d-flex justify-content-between">
                        <button
                          className="btn btn-outline-danger ms-1"
                          onClick={() => dispatch(decrementItem(item.id))}
                          disabled={item.quantity === 1}
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <h4>{item.quantity}</h4>
                        <button
                          className="btn btn-outline-success"
                          onClick={() => dispatch(addItem(item))}
                          disabled={item.quantity === item.count}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td className={`${styles.cell} col`}>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              <tr>
                <th scope="row "></th>
                <td className="col"></td>
                <td className="col"></td>
                <td className="col">
                  <h4>{totalPrice}</h4>
                </td>
                <td className="col">
                  <div className="w-75 d-flex justify-content-center">
                    <h2>{totalQuantity}</h2>
                  </div>
                </td>
                <td className="col"></td>
              </tr>
            </tbody>
          </table>
          <div className="container d-flex justify-content-center">
            <button
              disabled={!totalQuantity}
              className="btn btn-outline-success p-3"
            >
              Continue To Checkout
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
