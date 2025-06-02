import React from 'react';
import FAQ from '../components/FAQ';

const PreguntasFrecuentes = () => {
    const faqs = [
        {
            question: "¿Qué tipo de antigüedades ofrecen?",
            answer: "Ofrecemos una variedad de antigüedades vintage, incluyendo manteles bordados, vajillas, candelabros, espejos, relojes y cristalería."
        },
        {
            question: "¿Cómo puedo realizar una compra?",
            answer: "Puedes contactarnos a través del formulario de contacto en nuestra página o enviarnos un mensaje directo a nuestro Instagram."
        },
        {
            question: "¿Hacen envíos?",
            answer: "Sí, realizamos envíos a diferentes localidades. Consulta nuestras políticas de envío para más detalles."
        },
        {
            question: "¿Tienen garantía en sus productos?",
            answer: "Sí, ofrecemos una garantía de satisfacción en todos nuestros productos. Si no estás satisfecho, contáctanos para resolverlo."
        }
    ];

    return (
        <div className="preguntas-frecuentes">
            <h1>Preguntas Frecuentes</h1>
            <FAQ faqs={faqs} />
        </div>
    );
};

export default PreguntasFrecuentes;