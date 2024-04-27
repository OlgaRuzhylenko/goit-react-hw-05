import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch, value, onSearch2 }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const text = form.elements.text.value;
    if (text === "") {
      toast.error("Please, enter your request");
    }
    onSearch(text);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="text"
          type="text"
          value={value}
          onChange={(e) => onSearch2(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}
