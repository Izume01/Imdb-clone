import { useState, useEffect } from "react";
import axios from "axios";
import MovieComponent from "../Components/MovieComponent";

import Navbar from "../Components/Navbar";

export default function Popular() {
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    try {
      const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization: `${TMDB_API_KEY}`,
          },
        }
      );
      setMovies(response.data.results); // Update the state with movie data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
    console.log(movies);
  }, [movies]);

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
        <Navbar />

        {/* Text */}
        <div className="text-center mb-8 mt-10 flex flex-col items-center gap-2">
          <h1 className="text-5xl font-bold">Popular Movies</h1>
          <p className="max-w-5xl mt-2 text-2xl font-sans text-white">
            Discover the most-watched and highest-rated films of the moment
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
