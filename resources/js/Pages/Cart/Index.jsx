import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppLayout from '../../Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function CartIndex() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(route('cart.show'))
            .then(res => {
                setItems(res.data.items ?? []);
            })
            .catch(err => {
                console.error(err);
                setItems([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleRemove = async (id) => {
        try {
            await axios.delete(route('cart.remove', {
                id : id,
            }));
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            console.error(error);
            alert('Failed to remove item');
        }
    };

    const handleCheckout = async () => {
        try {
            await axios.post(route('cart.buy'), {
                items: items.map(item => ({ id: item.id, quantity: item.quantity }))
            });
            alert('Purchase completed!');
            setItems([]);
        } catch (error) {
            if (error.response?.status === 422) {
                alert(error.response.data.message);
            } else {
                alert('Something went wrong');
            }
        }
    }

    const handleQuantityChange = (id, newQuantity) => {
        const qty = Number.isNaN(newQuantity) || newQuantity < 1
        ? 1
        : newQuantity;

        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: qty } : item
            )
        );

    };

    const handleUpdateQuantity = async (id, quantity) => {
        try {
            await axios.put(route('cart.update'), 
            { 
                id: id,
                quantity : quantity,
            });

        } catch (error) {
            console.error(error);
            alert('Failed to update quantity');
        }
    };

    const total = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    return (
        <>
        <Head title="Cart "/>
        <AppLayout>
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

            {loading && <p>Loading cart...</p>}

            {!loading && items.length === 0 && (
                <p className="text-gray-600">Your cart is empty.</p>
            )}

            {!loading && items.length > 0 && (
                <div className="space-y-4">
                    {items.map(item => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border p-4 rounded"
                        >
                            <div>
                                <h2 className="font-semibold">{item.product.name}</h2>
                                <p className="text-sm text-gray-600">
                                    ${item.product.price} × 
                                    <input
                                        type="number"
                                        min="1"
                                        className="ml-2 w-16 border rounded px-2"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        onBlur={() => handleUpdateQuantity(item.id, item.quantity)}
                                    />
                                </p>
                            </div>

                            <button
                                onClick={() => handleRemove(item.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="text-right font-bold text-lg">
                        Total: ${total.toFixed(2)}
                    </div>
                    <div className="text-right mt-4">
                        <button
                            onClick={handleCheckout}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-semibold"
                            disabled={items.length === 0}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            )}
        </AppLayout>
        </>
    );
}