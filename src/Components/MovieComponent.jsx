import { Link } from "react-router"

export default function MovieComponent(prop) {
    return (
        <div className='relative rounded-2xl overflow-hidden flex gap-4 w-[300px] h-[400px] shadow-inner'>
            <Link
                state={{ movie: prop.info }}
                to={`/movie/${prop.info.id}`}
                className="mx-auto w-full h-full rounded-lg overflow-hidden"
            >
                <div className="w-full h-full rounded-lg overflow-hidden">
                    <img src={prop.poster} alt="" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-70 p-5 flex flex-col justify-end gap-2 opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
                    <h1 className="text-white text-2xl font-bold truncate">{prop.title}</h1>
                    <p className="text-gray-300 text-sm line-clamp-6">{prop.overview}</p>
                    {/* <p className="text-gray-300 text-sm">{prop}</p>
                    <p className="text-gray-400 text-sm font-medium">Rating</p> */}
                </div>
            </Link>
        </div>
    )
}

