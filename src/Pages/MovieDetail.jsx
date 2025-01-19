import { useLocation , useParams } from "react-router"

import MovieDetailsComponent from "../Components/MovieDetailsComponent";

export default function MovieDetail() {

    const location = useLocation();
    const {id}= useParams();
    const movie = location.state?.movie;
    console.log(movie)
    console.log(id)
    return (
        <>
            <MovieDetailsComponent  detail={movie} />
        </>
    )
}