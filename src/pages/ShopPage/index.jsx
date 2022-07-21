import axios from "axios";
import { useState, useEffect } from "react";
import { CategoryCheckbox, ProductCard, NavBar } from "../../components";
import { BASE_URL } from "../../config";
import "./style.scss";
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [displayproducts, setDisplayProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      console.log(response);
      setProducts(response.data.products);
      setDisplayProducts(response.data.products);
    } catch (e) {
      console.log(e.message);
    }
  };
  const getCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories`);
      console.log(response);
      setCategories(response.data.categories);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSearchName = (event) => {
    let search = event.target.value;
    setSearchTerm(search);

    const filteredProducts = products.filter((product) =>
      product.title.includes(search)
    );
    setDisplayProducts(filteredProducts);
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <div className="container page-container">
      <div className="row">
        <div className="col-3">
          <h3>Categories</h3>
          {categories
            ? categories.map((category, index) => (
                <CategoryCheckbox key={index} title={category.title} />
              ))
            : "Loading.."}
        </div>
        <div className="col-9">
          {products
            ? products.map((product, index) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  rating={product.rating}
                  image={product.mainImage}
                />
              ))
            : "Loading.."}
        </div>
      </div>
    </div>
  );
};
export { ShopPage };
