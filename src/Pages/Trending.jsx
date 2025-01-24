import { useState, useEffect } from "react";
import axios from "axios";
import MovieComponent from "../Components/MovieComponent";
import Navbar from "../Components/Navbar";

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

      console.log(response.data.results);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

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
    <div className="bg-black text-white min-h-screen">
      <div className="mx-auto max-w-[1400px] flex flex-col font-karla">
        <Navbar />

        {/* Text Section */}
        <div className="text-center px-4 mb-8 mt-12 md:mt-20 flex flex-col items-center gap-2">
          <h1 className="text-3xl md:text-5xl font-bold">Trending Movies</h1>
          <p className="max-w-5xl mt-2 text-lg md:text-2xl font-sans text-white px-4">
            Uncover the secrets behind the films everyone&apos;s talking about
          </p>
        </div>

        {/* Grid Container */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 p-4 md:p-10">
          {movieList}
        </div>
      </div>
    </div>
  );
}