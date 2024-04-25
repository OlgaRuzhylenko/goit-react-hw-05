import axios from "axios";

const trendUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTFkOTBlMjc1MjI4Mjc3ZWY5ZGYyYzU3ODgxZmFiMiIsInN1YiI6IjY2MjdmYTgzMjU4ODIzMDE2NDkyMDY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sYDfT15yaHIEUmIm6FySFORtR0JWwOFXBRoW_odb5OM'
  }
};
  
export const fetchTrendingMovies = async () => { 
    const response = await axios.get(trendUrl, options)
    return response.data
}   

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
  return response.data
}

export const fetchCast = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
  return response.data
}

export const fetchReviews = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
  return response.data
}

// export const fetchSearchMovie = async (movieId) => {
//   const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
//   return response.data
// }

