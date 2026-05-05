import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  // TODO: Define initial product data

  const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Iphone", price: 1000, inStock: true },
    { id: 3, name: "Samsung", price: 900, inStock: true },
    { id: 4, name: "Tablet", price: 400, inStock: true },
  ];

  // TODO: Implement state to manage filtering

  // TODO: Implement logic to filter products based on availability

  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* TODO: Add buttons to allow filtering by availability */}

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={products} />
    </div>
  );
};

export default App;
