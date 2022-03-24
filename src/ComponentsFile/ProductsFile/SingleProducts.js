import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleProducts.css';

const SingleProducts = (props) => {
    const {addToCartFun, product} = props;
    // console.log(addToCartFun);
    const { name, img, price, seller, shipping, id } = product;
    return (
        <div className='single-products-styel'>

            <div className="image">
                <img src={img} alt="" />
            </div>

            <div className="info">
                <div>
                    <p>name : {name}</p>
                    {/* <small>id : {id}</small> */}
                    <p>Price : {price}</p>
                    <p>shipping : {shipping}</p>
                    <p>Seller : {seller}</p>
                </div>
            </div>
            <div className="button" onClick={()=>addToCartFun(product)}>
            <div className='btn'>Add To Cart</div>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>

        </div>
    );
};

export default SingleProducts;