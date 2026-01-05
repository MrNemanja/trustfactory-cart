import React from 'react';
import { Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function Navbar() {
    const handleLogout = (e) => {
        e.preventDefault();
        Inertia.post('/logout');
    };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="space-x-4">
                <Link href="/products">Products</Link>
                <Link href="/cart">Cart</Link>
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