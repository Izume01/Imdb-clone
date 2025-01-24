import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import Navbar from '../Components/Navbar';
import MovieComponent from '../Components/MovieComponent';

export default function HeroPage() {
    const [SearchList, setSearchlist] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        if(event.type === 'change') {
            setSearch(event.target.value);
        }
    }

    const handleSearchButton = (event) => {
        if(event.type === 'click' && search.trim()) {
            FetchMovie();
        }
    }

    

    const FetchMovie = useCallback(async () => {
        if (!search.trim()) return;
        try {
            const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
            const response = await axios.get('https://api.themoviedb.org/3/search/multi', {
                headers: {
                    accept: 'application/json',
                    Authorization: `${TMDB_API_KEY}`
                }, 
                params : {
                    query : `${search}`
                }
            });

            setSearchlist(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }, [search]);

    useEffect(() => {
        if (search.trim()) {
            const timeoutId = setTimeout(() => {
                FetchMovie();
            }, 500);
            return () => clearTimeout(timeoutId);
        }
    }, [search, FetchMovie]);

    const movieList = SearchList.map((movie) => {
        return (
            <MovieComponent
                key={movie.id}
                title={movie.title}
                poster={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='}
                overview={movie.overview}
                rating={movie.vote_average}
                info={movie}
            />
        )
    })

    return (
        <div className='bg-black text-white min-h-screen'>
            <div className="mx-auto max-w-[1400px] flex flex-col font-karla">
                <Navbar/>

                {/* Search Section */}
                <div className='text-white px-4 md:px-8'>
                    <div className='text-center mb-8 mt-12 md:mt-20 flex flex-col items-center gap-2 px-4'>
                        <h1 className='text-4xl md:text-7xl font-bold'>Your Next Favorite Movie</h1>
                        <p className='max-w-[600px] text-sm md:text-base mt-4'>Search our extensive database for movies by title, genre, or director. Find the perfect film for your next movie night!</p>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4 p-4 rounded-lg max-w-[700px] mx-auto'>
                        <input 
                            type="text" 
                            className='w-full px-4 py-3 rounded-3xl text-black'
                            onChange={handleSearch}
                            placeholder="Search for movies..."
                        />
                        <button 
                            className='text-black bg-white px-8 py-2 rounded-3xl sm:w-auto w-full'
                            onClick={handleSearchButton}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Grid Container */}
                <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 p-4 md:p-10 mt-12 md:mt-20'>
                    {movieList}
                </div>
            </div>
        </div>
    )
}