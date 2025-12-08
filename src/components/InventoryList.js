import React from 'react';
import InventoryItem from './InventoryItem';
import './InventoryList.css';

class InventoryList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gallery } = this.props;
        return (
            <div className="inventory-list">
                {gallery.map((gallery) => (
                    <InventoryItem key={gallery.sku} gallery={gallery} />
                ))}
            </div>
        );
    }
}

export default InventoryList;