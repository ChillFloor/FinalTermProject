import React from "react";
import { useParams, Link } from "react-router-dom";
import inventoryData from "../data/inventory.json";
import "./ProductDetails.css";

function ProductDetail() {
    const { sku } = useParams();
    const product = inventoryData.find((item) => item.sku === sku);

    if (!product) {
        return (
            <div className="product-detail-error">
                <h2>Product Not Found</h2>
                <Link to="/products" className="back-link">Back to Products</Link>
                <Link to="/" className="back-link">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="product-detail">
            <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-detail-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>SKU: {product.sku}</p>
            <p>Quantity: {product.qty}</p>
            <p>Price:${product.price}</p>
            <Link to="/products" className="back-link">Back to Products</Link>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
}

export default ProductDetail;