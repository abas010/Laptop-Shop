import React ,{useContext}from "react";
import productContext from "../../Contexts/ProductsContext";

export default function Toast() {
  const contextData = useContext(productContext);
  return (
    <div className="toast-contaner position-fixed bottom-0 me-4 end-0 mb-4">
      <div className={`toast ${contextData.isShowTost ? 'show' :''} align-items-center text-white bg-primary`}> {/**add show classto show toast */}
        <div className="d-flex justify-content-between align-items-center">
            <div className="toast-body">The product were added to the shop card</div>
          <button
            type="button"
            className="btn-close btn-close-wsite me-3"
            onClick={() =>contextData.setIsShowTost(false)}
          ></button>
        </div>
      </div>
    </div>
  );
}
