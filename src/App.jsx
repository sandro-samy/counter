import { useState } from "react";
import "./bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/counter";
import About from "./pages/about";
import Contact from "./pages/contact";
import Store from "./pages/store";
import NotFound from "./pages/notfound";
import Product from "./pages/store/product";
import Navbar from "./components/navbar";
import Cart from "./pages/cart";
import { Provider } from "react-redux";
import store from "./store/store";
import SignUp from "./pages/signin";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} exact />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
