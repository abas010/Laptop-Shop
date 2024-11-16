import React, { useContext } from "react";
import productContext from "../../Contexts/ProductsContext";
import "./Products.css";

export default function Products() {
  const contextData = useContext(productContext);

  const addToCart = (info) => {
    contextData.setIsShowTost(true);
    setTimeout(() => {
      contextData.setIsShowTost(false);
    }, 3000);

    let isInuserCart = contextData.userCart.some(
      (bagProduct) => bagProduct.title === info.title
    );

    if (!isInuserCart) {
      let newProductCart = {
        id: contextData.userCart.length + 1,
        title: info.title,
        img: info.img,
        price: info.price,
        count: 1,
      };
      contextData.setUserCart((prevProducts) => {
        return [...prevProducts, newProductCart];
      });
    } else {
      let userCart = [...contextData.userCart];

      userCart.some((bagProduct) => {
        if (bagProduct.title === info.title) {
          bagProduct.count++;
          return true;
        }
      });
      contextData.setUserCart(userCart);
    }
  };

  return (
    <>
      {contextData.allProduct.map((product) => {
        return (
          <div className="row justify-content-center mt-5">
            <h3 className="text-center">{product.title}</h3>
            {product.infos.map((info) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
                  <div className="card py-3 px-3">
                    <div className="col-12 text-center">
                      <img
                        src={info.img}
                        alt="product image"
                        className="card-img-top w-90"
                      />
                    </div>

                    <div className="card-body text-center">
                      <p className="card-text">{info.title}</p>
                      <p className="price">{info.price}$</p>
                      <br />
                      <a className="btn btn-danger" onClick={() =>addToCart(info) }>
                        add to card
                      </a>
                      <a className="btn btn-outline-dark mt-3">
                        More Information
                      </a>
                      <p className="number"> number:{info.count}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
