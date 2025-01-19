
export default function MovieDetailsComponent(prop) {
    const backdrop = `https://image.tmdb.org/t/p/original${prop.detail.backdrop_path}`;
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Backdrop with gradient overlay */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img src={backdrop} className="w-full h-[60vh] object-cover" alt={prop.detail.title} />
            </div>

            {/* Content */}
            <div className="max-w-[1400px] mx-auto px-6 -mt-32 relative z-20">
                <div className="flex flex-col gap-8">
                    {/* Title and Rating */}
                    <div>
                        <h1 className="text-6xl font-bold mb-4">{prop.detail.title}</h1>
                        <div className="flex items-center gap-4">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
                                {prop.detail.vote_average.toFixed(1)}/10
                            </span>
                            <span className="text-gray-300">{prop.detail.release_date}</span>
                        </div>
                    </div>

                    {/* Overview and Details */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Overview</h2>
                            <p className="text-gray-300 leading-relaxed">{prop.detail.overview}</p>
                        </div>
                        
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Details</h2>
                            <div className="space-y-2 text-gray-300">
                                <p><span className="text-white font-medium">Original Title:</span> {prop.detail.original_title}</p>
                                <p><span className="text-white font-medium">Language:</span> {prop.detail.original_language.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}