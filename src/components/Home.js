import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <Product products={products}/>
  );
};

export default Home;
