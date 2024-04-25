import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../movies-api";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getTrendingMovies();
  }, []);

  return (
    <div>
      {error && <p>please visit our Movies page</p>}
      {movies.length > 0 && <MovieList trendMovies={movies} />}
      {loading && <p>Loading movies...</p>}
    </div>
  );
}
