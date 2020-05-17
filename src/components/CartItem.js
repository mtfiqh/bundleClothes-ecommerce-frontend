import React from "react";

const CartItem = ({ item: { product_id } }) => {
  return (
    <li className="collection-item avatar" key={product_id}>
      <label className="centered">
        <input type="checkbox" />
        <span></span>
      </label>
      <div className="item-img">
        {/* <img src={img} alt={img} className="" /> */}
      </div>

      <div className="item-desc">
        {/* <span className="title">{title}</span> */}
        <button
          className="waves-effect waves-light btn pink remove"
          onClick={() => {}}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
