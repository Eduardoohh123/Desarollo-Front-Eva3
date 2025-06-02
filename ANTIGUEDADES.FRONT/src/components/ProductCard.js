import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const history = useHistory();

    const handleContactClick = () => {
        history.push({
            pathname: '/contact',
            state: { product: product.title }
        });
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <button onClick={handleContactClick} className="contact-button">
                Contáctanos
            </button>
        </div>
    );
};

export default ProductCard;