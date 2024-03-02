import React, { useEffect, useState } from "react";
import "./Styles.css";

const LoadMore = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [diabledButton, setDisabledButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log("rrrrrrrrrrrrr", result);
    } catch (e) {
      setLoading(false);
    }
  };

  console.log("products", products);

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisabledButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading .Please Wiay </div>;
  }

  return (
    <div className="loadMore">
      <h1 style={{ color: "red" }}>
        <center>Fifth Project About Load More</center>
      </h1>
      <div className="product-container" style={{ color: "black" }}>
        {products.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <button
        className="buttonData"
        disabled={diabledButton}
        onClick={() => setCount(count + 1)}
      >
        Show Load More
      </button>
      <p className="disabledButton">
        {diabledButton ? <div>You Reached The limit</div> : null}
      </p>
    </div>
  );
};

export default LoadMore;
