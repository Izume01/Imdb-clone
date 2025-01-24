    export default function MovieDetailsComponent(prop) {
        
        const backdrop = `https://image.tmdb.org/t/p/original${prop.detail.backdrop_path}`;
        return (
            <div className="bg-black text-white min-h-screen">
                {/* Backdrop with enhanced gradient overlay */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                    <img src={backdrop} className="w-full h-[70vh] object-cover brightness-75" alt={prop.detail.title} />
                </div>

                {/* Content */}
                <div className="max-w-[1400px] mx-auto px-6 -mt-48 relative z-20">
                    <div className="flex flex-col gap-12">
                        {/* Title and Rating */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{prop.detail.title}</h1>
                            <div className="flex items-center gap-6">
                                <span className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold text-lg">
                                    {prop.detail?.vote_average?.toFixed(1) || 'N/A'}/10
                                </span>
                                <span className="text-gray-300 text-lg">{prop.detail.release_date}</span>
                            </div>
                        </div>

                        {/* Overview and Details */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold">Overview</h2>
                                <p className="text-gray-300 leading-relaxed text-lg">{prop.detail.overview}</p>
                            </div>
                            
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold">Details</h2>
                                <div className="space-y-4 text-lg">
                                    <p><span className="text-white font-medium">Original Title:</span> {prop.detail.original_title}</p>
                                    <p><span className="text-white font-medium">Language:</span> {prop.detail.original_language.toUpperCase()}</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Details */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm">
                            <div>
                                <h4 className="font-medium text-gray-400">Budget</h4>
                                <p className="text-2xl font-semibold">${prop.movieInfo?.budget?.toLocaleString() || 'N/A'}</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-400">Revenue</h4>
                                <p className="text-2xl font-semibold">${prop.movieInfo?.revenue?.toLocaleString() || 'N/A'}</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-400">Runtime</h4>
                                <p className="text-2xl font-semibold">{prop.movieInfo?.runtime || 'N/A'} min</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-400">Status</h4>
                                <p className="text-2xl font-semibold">{prop.movieInfo?.status || 'N/A'}</p>
                            </div>
                        </div>

                        {/* Production Companies */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Production Companies</h3>
                            <div className="flex flex-wrap gap-4">
                                {prop.movieInfo?.production_companies?.map((company) => (
                                        <span key={company.id} className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">
                                            {company.name}
                                        </span>
                                    )) || 'No production companies available'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
