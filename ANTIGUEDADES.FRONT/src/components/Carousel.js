import React from 'react';
import './Carousel.css'; // Assuming you will create a CSS file for styling

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>❮</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
            <button className="carousel-button next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carousel;