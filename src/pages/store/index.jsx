import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { truncate } from "javascript-functions";

const Store = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  const dispatch = useDispatch();
  return (
    <div className="container p-5">
      <div className="row gy-5  ">
        {products &&
          products.map((product) => (
            <div
              className="card shadow-sm  col p-3 rounded-4 "
              key={product.id}
            >
              <div style={{ minHeight: "500px" }}>
                <img src={product.image} className="card-img-top" alt="..." />
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
                  action={() => dispatch(addItem(product))}
                  text={<AiOutlineShoppingCart className="fs-3" />}
                  className="btn-success w-100 mx-0"
                ></Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Store);
