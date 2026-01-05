import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ canLogin, canRegister }) {
    return (
        <>
            <Head title="Welcome "/>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-4xl font-bold mb-8">Welcome to My Shop</h1>
                <p className="mt-4 text-gray-600 text-center max-w-md">
                    Please log in or register to access the shop and start browsing products.
                </p>
                <br />
                <div className="flex space-x-4">
                    {canLogin && (
                        <Link
                            href={route('login')}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Log in
                        </Link>
                    )}

                    {canRegister && (
                        <Link
                            href={route('register')}
                            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
                        >
                            Register
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}