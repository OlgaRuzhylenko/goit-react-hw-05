import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchSearchMovie } from "../../movies-api";

import { useState } from "react";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  //   const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [params, setParams] = useSearchParams();
  const searchingMovie = params.get("newSearchQuery") ?? "";

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);

    try {
      setLoading(true);
      const data = await fetchSearchMovie(newQuery);
      setMovies(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const searchNewQuery = (newQuery) => {
    params.set("newSearchQuery", newQuery);
    setParams(params);
  };
  return (
    <div>
      <SearchBar
        onSearch={handleSearch}
        value={searchingMovie}
        onSearch2={searchNewQuery}
      />
      {loading && <p>Loading movies list...</p>}
      {error && <p>No movies found</p>}
      {movies.length > 0 && <MovieList trendMovies={movies} />}
    </div>
  );
}
