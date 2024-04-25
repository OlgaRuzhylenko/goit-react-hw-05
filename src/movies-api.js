import axios from "axios";

const url = 'https://api.themoviedb.org'
const options = {
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTFkOTBlMjc1MjI4Mjc3ZWY5ZGYyYzU3ODgxZmFiMiIsInN1YiI6IjY2MjdmYTgzMjU4ODIzMDE2NDkyMDY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sYDfT15yaHIEUmIm6FySFORtR0JWwOFXBRoW_odb5OM'
  }
};
// axios.get(url, options)
//   .then(response => console.log(response))
//     .catch(err => console.error(err));
  
export const fetchTrendingMovies = async () => { 
    const response = await axios.get(url, options)
    return response.data
}   