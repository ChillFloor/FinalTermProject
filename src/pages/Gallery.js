import React from "react";
import InventoryList from "../components/InventoryList";
import inventoryData from "../data/inventory.json";

class Gallery extends React.Component {
    render() {
        return (
            <main className="gallery-page">
                <h2>Gallery</h2>
                <InventoryList gallery={inventoryData} />
            </main>
        );
    }
}

export default Gallery;