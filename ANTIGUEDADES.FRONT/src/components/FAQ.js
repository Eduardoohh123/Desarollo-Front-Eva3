import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "¿Qué tipo de antigüedades ofrecen?",
            answer: "Ofrecemos una variedad de antigüedades vintage, incluyendo manteles bordados, vajillas, candelabros, espejos, relojes y cristalería."
        },
        {
            question: "¿Cómo puedo realizar un pedido?",
            answer: "Puedes realizar un pedido a través de nuestro formulario de contacto. Simplemente selecciona el producto y completa tus datos."
        },
        {
            question: "¿Hacen envíos?",
            answer: "Sí, realizamos envíos a diferentes localidades. Los costos y tiempos de envío se especifican al momento de realizar el pedido."
        },
        {
            question: "¿Tienen una tienda física?",
            answer: "No contamos con una tienda física, pero puedes ver nuestros productos en línea y contactarnos para más información."
        },
        {
            question: "¿Cómo puedo saber más sobre un producto?",
            answer: "Si deseas más información sobre un producto específico, no dudes en contactarnos a través del formulario de contacto."
        }
    ];

    return (
        <div className="faq-section">
            <h2>Preguntas Frecuentes</h2>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;