import React, { useContext } from "react";
import productContext from "../../Contexts/ProductsContext";
import { BsBag } from "react-icons/bs";
import "./Navbar.css";

export default function Navbar() {
  const contextData = useContext(productContext);
  return (
    <nav className="navbar navbar-expand-sm py-3 d-flex">
      <div className="container">
        <a  className="navbar-brand  ">
          shop
        </a>
        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a  className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <div className="bag-box">
          <a
            className="bag"
            onClick={() => contextData.setIsShowCart(true)}
          >
            <BsBag className="text-white" />
            <span className="bag-products-counter"> 0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
