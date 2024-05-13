import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";


const Home = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setItems(data);
    } catch (err) {
      console.log("There is some error to fetch items", err.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="max-w-6xl w-10/12 mb-20 mx-auto justify-center items-center mt-4 flex gap-4 flex-wrap">
      {loading ? (
        <Spinner />
      ) : items.length > 0 ? (
        items.map((item) => <Product key={item.id} item={item} />)
      ) : (
        <div className="text-xl text-gray-800 font-bold flex justify-center items-center mt-60">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
