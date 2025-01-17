import { UserRound } from 'lucide-react';
import { Link } from 'react-router';
import MovieComponent from '../Components/MovieComponent';

export  default  function HeroPage() {
    return (
        // Wrapper Class
        <div className='bg-black text-white'>
            <div className="min-h-screen mx-auto max-w-[1400px] flex flex-col font-karla">
                {/* NavBar */}
                <nav className='flex justify-between items-center py-6 px-8  '>
                    <div className="text-2xl font-bold">
                        <h1>Logo</h1>
                    </div>

                    <div className='flex gap-6 text-lg font-thin'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/popular'}>Popular</Link>
                        <Link to={'/trending'}>Trending</Link>

                    </div>

                    <div>
                        <UserRound className='text-2xl'/>
                    </div>
                </nav>

                {/* Search Button */}

                <div className='text-white'>
                    <div className='text-center mb-8 mt-20 flex flex-col items-center gap-2'>
                        <h1 className='text-7xl'>Your Next Favorite Movie</h1>
                        <p className='max-w-[600px]'>Search our extensive database for movies by title, genre, or director. Find the perfect film for your next movie night!</p>
                    </div>

                    <div className=' flex gap-4 p-4 rounded-lg max-w-[700px] mx-auto'>
                        <input type="text" className='w-full px-4 py-3 rounded-3xl text-black' />
                        <button className='text-black bg-white px-8 rounded-3xl'>Search</button>
                    </div>
                </div>

                {/* Grid Container */}

                <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-8 mt-20'>
                    <MovieComponent />
                    <MovieComponent />
                    <MovieComponent />
                    <MovieComponent />
                    <MovieComponent />
                    <MovieComponent />
                </div>
            </div>
        </div>
    )
}