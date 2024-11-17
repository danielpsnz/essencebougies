import axios from 'axios';

const API_URL = 'http://localhost:5000/api/'; // Adjust based on your port

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    return [];
  }
};