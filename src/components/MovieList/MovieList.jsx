import { Link } from "react-router-dom";

export default function MovieList({ trendMovies }) {
  return (
    <div>
      <p>Trending today</p>
      <ul>
        {trendMovies.map((trendMovie) => (
          <li key={trendMovie.id}>
            <p>
              <Link to="">{trendMovie.title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
