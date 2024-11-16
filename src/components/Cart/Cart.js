import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import productContext from "../../Contexts/ProductsContext";
import "./Cart.css";

export default function Cart() {
  const contextData = useContext(productContext);
  return (
    <aside className={`bag-sidebar ${contextData.isShowCart ? "active" : ""} `}>{/* add active class to show bag sidebar */}
      <h3 className="bag-titel">
        <span>
          <BsBag />
          Bag
        </span>
        <span>
          <AiOutlineClose
            className="close-icon"
            onClick={() =>contextData.setIsShowCart(false)}
          />
        </span>
      </h3>

      <div className="row bag-wrapper">
        {contextData.userCart.map((product) => {
          return (
            <div className="col-12 mt-5">
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src={product.img}
                    alt="Product Image"
                    className="card-img-top w-90"
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <p className="card-text">{product.title}</p>
                  <p className="price">{product.price}$</p>
                  <br />
                  <a href="#" className="btn btn-danger">
                    Buy
                  </a>
                  <a className="btn btn-outline-dark mt-3 text-capitalize">
                    More Information
                  </a>
                  <p className="number">{product.count}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
