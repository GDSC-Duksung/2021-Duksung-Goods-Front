import React from 'react';
//import Product from '../components/Product';
import Basket from '../components/Basket';
import WishList from '../components/WishList';
import WishHeader from '../components/WishHeader'
import data from './data';
import { useState } from 'react';
import './Index.css';

const WishPage = () => {
    const { products } = data;
    const [ cartItems, setCartItems ] = useState([]);
    const onAdd = ( product ) => {
        const exist = cartItems.find((x)=> x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) => 
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = ( product ) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else{
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    return (
        <div className="WishPage">
            <WishHeader/>
            <div className="row">
                <WishList products={products} onAdd={onAdd}></WishList>
                <Basket 
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                ></Basket>
            </div>
        </div>
    );
};

export default WishPage;