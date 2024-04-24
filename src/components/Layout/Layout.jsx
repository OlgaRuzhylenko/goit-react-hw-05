import Navigation from "../Navigation/Navigation";
import { useEffect, useState } from "react";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {}, []);

  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
