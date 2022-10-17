import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Store = ({ increament }) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="container py-5">
      <div className="container d-flex flex-wrap justify-content-between gap-3">
        {products &&
          products.map((product) => (
            <div
              className="card shadow-sm p-3"
              style={{ width: "18rem" }}
              key={product.id}
            >
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mb-3">{product.title}</h5>
                <div className="card-text">
                  <p className="mb-2">{product.category}</p>
                  <p>{product.price} EGP</p>
                </div>
                <div className="d-flex flex-column justify-content-between">
                  <Link
                    to={`product/${product.id}`}
                    className="btn btn-primary w-100 mb-2"
                  >
                    more details
                  </Link>
                  <Button
                    action={increament}
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

export default Store;
