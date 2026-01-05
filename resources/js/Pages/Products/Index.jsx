import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../Components/ProductCard';
import AppLayout from '../../Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/cart-api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
        <Head title="Products "/>
        <AppLayout>
            <h1 className="text-2xl mb-4">Products</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </AppLayout>
        </>
    );
}