import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchSearchMovie } from "../../movies-api";

import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  //   const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);

    try {
      setLoading(true);
      const data = await fetchSearchMovie(newQuery);
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading movies list...</p>}
      {error && <p>No movies found</p>}
      {movies.length > 0 && <MovieList trendMovies={movies} />}
    </div>
  );
}
