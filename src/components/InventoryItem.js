import React from "react";
import {Link} from "react-router-dom";

class InventoryItem extends React.Component {
    render() {
        const { gallery } = this.props;
        return (
            <div className="inventory-item">
                <img src={process.env.PUBLIC_URL + gallery.image} alt={gallery.name} className="gallery-image" />
                <div className="gallery-details">
                    <h3>{gallery.name}</h3>
                    <Link to={`/galleryDetail/${gallery.sku}`} className="view-details-btn">View Details</Link>
                </div>
            </div>
        );
    }
}

export default InventoryItem;