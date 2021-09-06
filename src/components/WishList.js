import React from 'react';
import Product from './Product'

const WishList = (props) => {
    const { products, onAdd } = props;
    return (
        <main className="block col-2">
            <h2>Products</h2>
            <label><input type="checkbox"/>선택상품 삭제</label>
            <div className="row">
                <table>
                {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
                </table>
            </div>
        </main>
    );
};

export default WishList;