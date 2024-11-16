import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Toast from "./components/Toast/Toast";
import Cart from "./components/Cart/Cart";
import productsData from "./data/productData";
import productContext from "./Contexts/ProductsContext";
import "./App.css";

export default function App() {
  const [allProduct] = useState(productsData);
  const [userCart, setUserCart] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);
  const [isShowTost, setIsShowTost] = useState(false);
  return (
    <div>
      <productContext.Provider
        value={{
          allProduct,
          userCart,
          setUserCart,
          isShowCart,
          setIsShowCart,
          isShowTost,
          setIsShowTost,
        }}
      >
        <Navbar />
        <main className="p-5">
          <div className="container">
            <h1 className="text-center main-titel">All Products</h1>
            <Products />;
          </div>
        </main>
        <Toast />
        <Cart />
      </productContext.Provider>
    </div>
  );
}
