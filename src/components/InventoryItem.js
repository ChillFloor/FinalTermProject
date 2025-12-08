import React from "react";
import {Link} from "react-router-dom";

class InventoryItem extends React.Component {
    render() {
        const { product } = this.props;
        return (
            <div className="inventory-item">
                <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className="quantity"> Quantity: {product.qty}</p>
                    <p className="price"> ${product.price}</p>
                    <Link to={`/productDetail/${product.sku}`} className="view-details-btn">View Details</Link>
                </div>
            </div>
        );
    }
}

export default InventoryItem;