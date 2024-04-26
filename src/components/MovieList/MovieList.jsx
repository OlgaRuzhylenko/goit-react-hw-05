import { Link } from "react-router-dom";

export default function MovieList({ trendMovies }) {
  return (
    <div>
      <ul>
        {trendMovies.map((trendMovie) => (
          <li key={trendMovie.id}>
            <p>
              <Link to={`/movies/${trendMovie.id}`}>{trendMovie.title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
