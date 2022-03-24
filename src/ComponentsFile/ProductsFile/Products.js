import React, { useState } from 'react';
import SingleProducts from './SingleProducts';
import './Products.css';
import CalculateInfo from './ProductsCalculateFile/CalculateInfo';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useState(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCartFun = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    // console.log(cart)

    return (
        <div>
            <h2>Products</h2>
            <div className="main-container">
                <div className="products-container">
                    {
                        products.map(product => <SingleProducts
                            product={product}
                            key={product.id}
                            addToCartFun={addToCartFun}
                        ></SingleProducts>)
                    }
                </div>

                <div className="products-info">
                   <CalculateInfo cart={cart}></CalculateInfo>
                </div>
            </div>
        </div>
    );
};

export default Products;