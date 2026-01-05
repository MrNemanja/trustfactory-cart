import React from 'react';
import Navbar from '../Components/Navbar';

export default function AppLayout({ children }) {
    return (
        <div>
            <Navbar />
            <main className="p-4">
                {children}
            </main>
        </div>
    );
}