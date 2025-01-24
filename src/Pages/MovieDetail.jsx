import { useLocation , useParams } from "react-router"

import MovieDetailsComponent from "../Components/MovieDetailsComponent";
import useMovieDetail from "../hook/useMovieDetail";

export default function MovieDetail() {

    const location = useLocation();
    const {id}= useParams();
    const movie = location.state?.movie;
    const movieDetail = useMovieDetail(id);
    console.log(movieDetail);
    return (
        <>
            <MovieDetailsComponent  detail={movie} movieInfo = {movieDetail} />
        </>
    )
}