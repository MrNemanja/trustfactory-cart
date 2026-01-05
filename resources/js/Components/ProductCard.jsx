import React from 'react';

export default function ProductCard({ product }) {
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>${product.price}</p>
            <p>Stock: {product.stock_quantity}</p>
            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                Add to Cart
            </button>
        </div>
    );
}