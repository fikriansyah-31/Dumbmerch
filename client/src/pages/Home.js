import { React, useState, useEffect } from "react";
import { Form, Pagination } from "react-bootstrap";
import { products } from "../components/datadummy/Products";
import Navbar  from '../components/Navbar';
import { Rate } from 'antd'

// Component
import Homelist from "../components/list/Homelist";

// import { render } from "express/lib/response";

const Home = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [showProduct, setShowProduct] = useState([]);
  // const [showCategory, setShowCategory] = useState([])

    let active = [];
    let items = [];
        for (let number = 1; number <= 10; number++) {
        items.push(
    <Pagination.Item className="bg-var-dark-gray" key={number} active ={number === active }>
      {number}
    </Pagination.Item>,
  );
}   

  const categoryProducts = products.reduce((acc, product) => {
    const categoryIndex = acc.findIndex((item) => item.name === product.category);
    if (categoryIndex > -1) {
        acc[categoryIndex].products.push(product);
    } else {
      acc.push({ name: product.category, products: [product] });
    }
    return acc;
}, []);

  useEffect(() => {
    if (selectCategory) {
        const filterProduct = products.filter((data) => data.category === selectCategory);
        setShowProduct(filterProduct);
    } else {
        setShowProduct(products);
    }
}, [selectCategory, products]);
  
  const changeCategory = (e) => {
      const value = e.target.value;
    setSelectCategory(value);
    console.log(value);
};


return (
    <>
    <Navbar />
    <div className="container mb-lg-0 mb-5">
    <div className="d-flex align-items-center">
    <p className="text-var-red fw-bold mt-4 fs-4">Product</p>
    <Form.Select onChange={changeCategory} value={selectCategory} aria-label="Select" className="form-select-category bg-var-dark-gray text-white ms-auto">
    <option value="">All</option>
    {categoryProducts.map((data, index) => {
        return (
            <option key={index} value={data.name}>
            {data.name}
            </option>
            );
        })}
        </Form.Select>
        </div>
        
        <div className="products d-flex flex-wrap gap-3 mt-4 justify-content-md-start justify-content-center ">
        {showProduct.map((item, index) => {
          return <Homelist key={index} id={index} image={item.image} title={item.title} price={item.price} stock={item.stock} />
        }
        )}
        </div>
        </div>
        <div>
        <Pagination  size="md - d-flex flext-warp ms-3 mt-4  justify-content-md-center">{items}</Pagination>
          </div>
        </>
        );
    };
    
    export default Home;
    