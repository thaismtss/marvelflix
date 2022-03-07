const axios = require("axios");

const BASE_URL = "https://api.themoviedb.org/3";
const api = axios.create({baseURL: BASE_URL})

const getMoviesMcu = page => api.get("discover/movie", { 
    params: { 
        api_key: process.env.REACT_APP_API_KEY,
        language: 'pt-BR',
        without_companies: 'mcu',
        page: page
     } 
  });

export default {
    getMoviesMcu
}
