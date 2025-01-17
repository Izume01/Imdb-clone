export default function MovieComponent() {
    return (
        <div className='relative rounded-2xl overflow-hidden flex gap-4 w-[300px] h-[400px]'>
            <div className="w-full h-full rounded-lg overflow-hidden">
                <img src="https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg" alt="" 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-70 p-5 flex flex-col justify-end gap-2 opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
                <h1 className="text-white text-2xl font-bold">Title</h1>
                <p className="text-gray-300 text-sm">Genre</p>
                <p className="text-gray-300 text-sm">Director</p>
                <p className="text-gray-400 text-sm font-medium">Rating</p>
            </div>
        </div>
    )
}

// Make Popular Component
// Make Trending Component
// Movie Details Component
// Filter Movie / Sort 
// Pagination
// Tags 