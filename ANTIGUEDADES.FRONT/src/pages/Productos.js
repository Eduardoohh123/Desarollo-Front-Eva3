import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api';

const Productos = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };

        getProducts();
    }, []);

    return (
        <div className="productos-page">
            <h1>Productos</h1>
            <div className="productos-list">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        image={product.image} 
                        title={product.title} 
                        description={product.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Productos;