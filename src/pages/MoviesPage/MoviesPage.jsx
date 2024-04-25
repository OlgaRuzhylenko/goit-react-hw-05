import MovieList from "../../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
//   const [query, setQuery] = useState("");

//   const handleSearch = (evt) => {
//     evt.preventDefault();

//     const form = evt.target;
//     const text = form.elements.text.value;
//     if (text === "") {
//       toast.error("Please, enter your request");
//     }

//     form.reset();
//   };

//   return (
//     <header>
//       <form>
//         <input
//           className={css.input}
//           name="text"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movie"
//         />
//         <button type="submit" className={css.btn}>
//           Search
//         </button>
//         <Toaster />
//       </form>
//     </header>
//   );
// }
