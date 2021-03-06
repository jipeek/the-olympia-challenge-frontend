
import axios from 'axios';

export const GetCategories = async () => {
    try {
        let result = await  axios.get(`https://api.jipeek.com/categories/`);
        console.log(result.data, 'data peticion');
        return result.data;
    } catch (e) {
        return {error: true};
    }
};

export const GetProducts = async () => {
    try {
        let result = await  axios.get(`https://api.jipeek.com/products/`);
        console.log(result.data, 'data peticion');
        return result.data;
    } catch (e) {
        return {error: true};
    }
};