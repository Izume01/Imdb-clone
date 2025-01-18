import { useState, useEffect } from "react";
import axios from "axios";
import MovieComponent from "../Components/MovieComponent";
import { UserRound } from "lucide-react";
import { Link } from "react-router";

export default function Trending() {
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    try {
      const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        {
          headers: {
            accept: "application/json",
            Authorization: `${TMDB_API_KEY}`,
          },
        }
      );

      // Log data directly after getting the response
      console.log(response.data.results);

      setMovies(response.data.results); // Update the state with movie data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  // Map through movies state to render MovieComponent
  const movieList = movies.map((movie) => {
    return (
      <MovieComponent
        key={movie.id}
        title={movie.title}
        poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        overview={movie.overview}
        rating={movie.vote_average}
        info={movie}
      />
    );
  });

  return (
    <div className="bg-black text-white">
      <div className="min-h-screen mx-auto max-w-[1400px] flex flex-col font-karla">
        {/* NavBar */}
        <nav className="flex justify-between items-center py-6 px-8  ">
          <div className="text-2xl font-bold">
            <Link to={"/"}>Logo</Link>
          </div>

          <div className="flex gap-6 text-lg font-thin">
            <Link to={"/"}>Home</Link>
            <Link to={"/popular"}>Popular</Link>
            <Link to={"/trending"}>Trending</Link>
          </div>

          <div>
            <UserRound className="text-2xl" />
          </div>
        </nav>


        {/* Text */}
        <div className="text-center mb-8 mt-20 flex flex-col items-center gap-2">
          <h1 className="text-5xl font-bold">Trending Movies</h1>
          <p className="max-w-5xl mt-2 text-2xl font-sans text-white">
            Uncover the secrets behind the films everyone&apos;s talking about
          </p>
        </div>

        {/* Grid Container */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-8">
          {movieList}
        </div>
      </div>
    </div>
  );
}
