import { UserRound, Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
                    {/* NavBar */}
        <nav className='relative flex justify-between items-center py-4 px-4 md:py-6 md:px-8'>
        <div className="text-xl md:text-2xl font-bold">
            <Link to={'/'}>Logo</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
            className='md:hidden z-50'
            onClick={toggleMenu}
        >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-6 text-lg font-thin'>
            <Link to={'/'}>Home</Link>
            <Link to={'/popular'}>Popular</Link>
            <Link to={'/trending'}>Trending</Link>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-0 right-0 h-screen w-64 bg-gray-900 flex-col items-center pt-20 gap-8 text-lg font-thin`}>
            <Link to={'/'} onClick={toggleMenu}>Home</Link>
            <Link to={'/popular'} onClick={toggleMenu}>Popular</Link>
            <Link to={'/trending'} onClick={toggleMenu}>Trending</Link>
        </div>

        <div className='hidden md:block'>
            <UserRound className='text-2xl'/>
        </div>
        </nav>
        </>
    );
}  