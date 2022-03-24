import React from 'react';

const CalculateInfo = (props) => {
    const {cart} = props;

    let totalprice = 0;
    let shipping = 0;
    for(const product of cart){
        totalprice = totalprice + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (totalprice * 5 /100).toFixed(2);
    const grandTotal = totalprice + shipping + parseFloat(tax);

    return (
        <div>
            <h2>Products ditles</h2>
            <p>Total Items : {cart.length}</p>
            <p>Total Price : {totalprice}</p>
            <p>shipping : {shipping}</p>
            <p>Tax : {tax}</p>
            <p>Grand Price : {grandTotal}</p>
        </div>
    );
};

export default CalculateInfo;


