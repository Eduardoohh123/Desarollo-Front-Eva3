import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchQuienesSomos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/quienes-somos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Quienes Somos data:', error);
        throw error;
    }
};

export const fetchProductos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/productos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Productos data:', error);
        throw error;
    }
};

export const fetchPreguntasFrecuentes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/preguntas-frecuentes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Preguntas Frecuentes data:', error);
        throw error;
    }
};