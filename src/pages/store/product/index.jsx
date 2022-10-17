import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Product = ({ increament }) => {
  const [product, setProduct] = React.useState({});
  let { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  return (
    <>
      {product && (
        <div className="container main-container">
          <div className="container row pb-3">
            <Link className="pointer fs-5 text-dark" to="/"></Link>
          </div>
          <div className="container main-content row">
            <div className="image-container col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={product.image}
                className="w-100"
                alt={`image${product.id}`}
              />
            </div>
            <div className="specs-container col-lg-4 col-md-12 mb-4 mb-lg-0">
              <h2 className="mb-4">{product.name}</h2>
              <p>Description : {product.description}</p>
              <p>Rating :</p>
              <p>price : {product.price}</p>
            </div>
            <div className="action-container col-lg-4 col-md-12">
              <div className="inner-action-container d-flex flex-column justify-content-center rounded-3 shadow-lg border-2-dark w-100 p-4 mb-5 my-lg-0 mx-auto">
                <div className="w-100 d-flex justify-content-between px-5">
                  <p>Price</p>
                  <p>:</p>
                  <p>{product.price}</p>
                </div>
                <div className="w-100 d-flex justify-content-between px-5">
                  <p>Status</p>
                  <p>:</p>
                  <p>{product.count}</p>
                </div>
                <button className="btn btn-dark" onClick={increament}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
