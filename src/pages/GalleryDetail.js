import React from "react";
import { useParams, Link } from "react-router-dom";
import inventoryData from "../data/inventory.json";
import "./GalleryDetail.css";

function GalleryDetail() {
    const { sku } = useParams();
    const gallery = inventoryData.find((item) => item.sku === sku);

    if (!gallery) {
        return (
            <div className="gallery-detail-error">
                <h2>Gallery Not Found</h2>
                <Link to="/gallery" className="back-link">Back to Gallery</Link>
                <Link to="/" className="back-link">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="gallery-detail">
            <img src={process.env.PUBLIC_URL + gallery.image} alt={gallery.name} className="gallery-detail-image" />
            <h2>{gallery.name}</h2>
            <p>{gallery.description}</p>
            <Link to="/gallery" className="back-link">Back to Gallery</Link>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
}

export default GalleryDetail;