import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { pathname } = useLocation();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav
      className="navbar navbar-expand-lg bg-light w-100 p-0 sticky-top shadow-sm mb-4"
      style={{ maxHeight: "60px" }}
      id="navbar"
    >
      <div className="container ">
        <Link
          className="navbar-brand form-control-lg d-flex justify-content-center align-items-center  fw-bolder fs-3 "
          to="/"
        >
          Store
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-auto pt-1"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold text-uppercase  ${
                  (pathname === "/" || pathname.split("/")[1] === "product") &&
                  "active"
                }`}
                aria-current="page"
                to="/"
              >
                product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold text-uppercase  ${
                  pathname === "/about" && "active"
                }`}
                to="/about"
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold text-uppercase  ${
                  pathname === "/contact" && "active"
                }`}
                to="/contact"
              >
                contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold text-uppercase  ${
                  pathname === "/counter" && "active"
                }`}
                to="/counter"
              >
                counter
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold text-uppercase d-flex align-items-center position-relative  ${
                  pathname === "/cart" && "active"
                }`}
                to="cart"
              >
                <AiOutlineShoppingCart className="fs-2" />
                {!!totalQuantity && (
                  <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
