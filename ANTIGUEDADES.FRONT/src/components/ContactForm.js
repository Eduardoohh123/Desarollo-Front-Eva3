import React, { useState } from 'react';
import { validateEmail } from '../utils/validation';

const ContactForm = ({ product }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (!name || !email || !message) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        // Aquí se puede agregar la lógica para enviar el formulario, por ejemplo, a una API
        console.log('Formulario enviado:', { name, email, message, product });
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <h2>Contáctanos</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">¡Mensaje enviado con éxito!</p>}
            <input
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Tu mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <input type="hidden" name="producto" value={product} />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;