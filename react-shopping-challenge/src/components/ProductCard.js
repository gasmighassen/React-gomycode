import React from "react";
import "./ProductCard.css";
const ProductCard = ({ products }) => {
  return (
    <div className="prod-list">
      <div className="prod-img">
        <img src={products.image} alt="" />
      </div>
      <div className="prod-info">
        <h1>{products.name}</h1>
        <p>{products.description}</p>
      </div>
      <div className="price">
        <p>
          Price: <span>{products.price} $</span>
        </p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
