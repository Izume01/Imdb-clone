import axios from "axios";
import { useEffect , useState} from "react";

export default function useMovieDetail(id) {
    const movieId = id; 

    const [movieInfo , setmovieInfo] = useState({});

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: `${TMDB_API_KEY}`
                    }
                });
                console.log("Hello this is it " , response.data);
                setmovieInfo(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [movieId]);

    return movieInfo;
}