import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ name, price, stock }) => {
  return (
    // TODO: Apply conditional class to <div> above for out-of-stock items
    <div className={stock ? styles.card : styles.outOfStock}>
      {/* TODO: Display product name */}
      <h3>{name}</h3>

      {/* TODO: Display product price */}
      <p>{price}</p>

      {/* TODO: Show if the product is in stock or out of stock */}
      <p>{stock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductCard;
