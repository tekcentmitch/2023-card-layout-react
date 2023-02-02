import React from "react";
import "./App.scss";

// API
const API = "https://mocki.io/v1/f8d44009-0a6d-45ca-8f0a-7a81f2cc0731";

/*
  API returns an array of "products"
  Each individual product has the followings:
    id: string
    stock: number
    thumbnail: string
    title: string
    brand: string
    description: string
    category: string
    price: number
*/

function App() {
  return (
    <div className="wrapper">
      <h1>Render your data below</h1>
      <p>Replace content with your logic according to requirements</p>
    </div>
  );
}

export default App;
