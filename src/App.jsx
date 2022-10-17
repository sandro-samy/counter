import { useState } from "react";
import "./bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/counter";
import About from "./pages/about";
import Contact from "./pages/contact";
import Store from "./pages/store";
import NotFound from "./pages/notfound";
import Product from "./pages/store/product";
import Navbar from "./pages/navbar";
import Cart from "./pages/cart";
function App() {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount((prev) => prev + 1);
  };

  const decreament = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <BrowserRouter>
      <Navbar count={count} />
      <Routes>
        <Route path="/" element={<Store increament={increament} />} exact />
        <Route path="/product/:id" element={<Product increament={increament} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart count={count} />} />
        <Route
          path="/counter"
          element={
            <Counter
              count={count}
              increament={increament}
              decreament={decreament}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
