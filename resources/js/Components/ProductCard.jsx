import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function ProductCard({ product }) {

    const [loading, setLoading] = useState(false);

    const handleAddToCart = async () => {
        setLoading(true);
        try {
            await axios.post(route('products.add'), {
                product_id: product.id,
                quantity: 1,
            });
            alert(`${product.name} added to cart!`);
        } catch (error) {
            console.error(error);
            alert('Failed to add product to cart.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>${product.price}</p>
            <p>Stock: {product.stock_quantity}</p>
            <button 
                onClick={handleAddToCart}
                disabled={loading || product.stock_quantity === 0}
                className={`mt-2 px-3 py-1 rounded text-white font-semibold ${
                    product.stock_quantity === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : loading
                        ? 'bg-blue-300 cursor-wait'
                        : 'bg-blue-500 hover:bg-blue-600'
                }`}
            >
                {product.stock_quantity === 0 ? 'Out of Stock' : loading ? 'Adding...' : 'Add to Cart'}
            </button>
        </div>
    );
}