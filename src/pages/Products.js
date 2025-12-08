import React from "react";
import InventoryList from "../components/InventoryList";
import inventoryData from "../data/inventory.json";

class Products extends React.Component {
    render() {
        return (
            <div className="products-page">
                <h2>Our Inventory</h2>
                <InventoryList products={inventoryData} />
            </div>
        );
    }
}

export default Products;