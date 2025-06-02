import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
import { fetchProducts } from '../api';

const Home = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <div>
            <Navbar />
            <Carousel />
            <Section title="Nuestros Productos">
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            image={product.image} 
                            title={product.title} 
                            description={product.description} 
                        />
                    ))}
                </div>
            </Section>
            <Section title="Contáctanos">
                <ContactForm />
            </Section>
        </div>
    );
};

export default Home;