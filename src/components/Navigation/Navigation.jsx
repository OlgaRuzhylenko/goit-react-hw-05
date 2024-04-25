import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const getNavLinkByClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav>
      <NavLink to="/" className={getNavLinkByClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getNavLinkByClass}>
        Movies
      </NavLink>
    </nav>
  );
}
