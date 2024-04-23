import axios from "axios";

const API_KEY = "491d90e275228277ef9df2c57881fab2";
axios.defaults.baseURL = 'https://api.themoviedb.org'

export const fetchTrendingMovies = async() => {
    const response = await axios.get('/3/trending/movie/day', 
{params: {
Authorization: API_KEY
}}
)
   response.data.results
}