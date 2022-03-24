import React, { useEffect, useState } from 'react';
import SingleProducts from './SingleProducts';
import './Products.css';
import CalculateInfo from './ProductsCalculateFile/CalculateInfo';
import { addToDb, getDataToLocatStore } from '../../utilities/fakedb';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(products.length)
    // console.log(cart.length)
    useState(() => {
        // console.log("Producets load first befoure fetch", products)
        fetch("products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // console.log("data load")
            })
    }, [])

    useEffect(() => {
        // console.log("local storte data load")
        const storedData = getDataToLocatStore();
        // console.log(storedData);
        const saveCart = [];
        for (const id in storedData) {
            const addedProducts = products.find(product => product.id === id);
            if(addedProducts){
                const quentity = storedData[id];
                addedProducts.quentity = quentity;
                saveCart.push(addedProducts)
                // console.log(quentity)
                // console.log(addedProducts);
            }
        }
        setCart(saveCart);
        // console.log("local Storage finished ")
    }, [products])

    const addToCartFun = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
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