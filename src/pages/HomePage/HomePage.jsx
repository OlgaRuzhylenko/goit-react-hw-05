import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../movies-api";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getTrendingMovies() {
      const data = await fetchTrendingMovies();
      setMovies(data);
    }
    getTrendingMovies();
  }, []);
  return;
}
