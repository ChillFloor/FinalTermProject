import React from 'react';
import InventoryItem from './InventoryItem';
import './InventoryList.css';

class InventoryList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { products } = this.props;
        return (
            <div className="inventory-list">
                {products.map((product) => (
                    <InventoryItem key={product.sku} product={product} />
                ))}
            </div>
        );
    }
}

export default InventoryList;