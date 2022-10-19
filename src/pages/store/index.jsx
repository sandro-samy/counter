import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { truncate } from "javascript-functions";
import styles from "./store.module.css";
import { getProducts } from "../../store/productsSlice";
const Store = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const login = useSelector((state) => state.login.user);
  console.log(login);

  return (
    <div className="container p-5">
      <div className="row gy-5">
        {products &&
          products.map((product) => (
            <div className="col-lg-4 col-md-6 col-sm-12 " key={product.id}>
              <div className="card rounded-4 shadow-sm p-3">
                <div className={styles.cardCaption}>
                  <div style={{ height: "40vh"  }} className="d-flex justify-content-center">
                    <img
                      src={product.image}
                      className="card-img-top h-100"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      {truncate(product.title, 20)}
                    </h5>
                    <div className="card-text">
                      <p className="mb-2">{product.category}</p>
                      <p>{product.price} EGP</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column ">
                  <Link
                    to={`product/${product.id}`}
                    className="btn btn-primary w-100 mb-2"
                  >
                    more details
                  </Link>
                  <Button
                    disabled={!login}
                    action={() => dispatch(addItem(product))}
                    text={<AiOutlineShoppingCart className="fs-3" />}
                    className="btn-success w-100 mx-0"
                  ></Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Store);
