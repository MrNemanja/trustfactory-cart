import React from 'react';
import { Link, router } from '@inertiajs/react';

export default function Navbar() {
    
    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'));
    };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="space-x-4">
                <Link href={route('products.page')}>Products</Link>
                <Link href={route('cart.page')}>Cart</Link>
            </div>
            <div>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}