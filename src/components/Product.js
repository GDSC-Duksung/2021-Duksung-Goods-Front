import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, onAdd } = props; 
    const onDelete = () => { //관심목록에서 삭제하기

    }
    return (
        <div><tr>
            <td>
            <input type="checkbox"/></td>
            <td><img className="small" src={product.image} alt={product.name} /></td>
            <td><h3>{product.name}</h3><br/>
            <div>${product.price}</div></td>
            <td><div id='type'>{product.type}</div></td>
            <td><div>
                <button onClick={() => onAdd(product)}>Buy</button>
            </div></td>
            <td><div>
                <button onClick={()=> onDelete}>X</button>
            </div></td>

        </tr></div>
    );
};

export default Product;