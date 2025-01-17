export default function MovieComponent() {
    return (
        <div className='relative rounded-2xl overflow-hidden flex gap-4 w-[300px] h-[400px] shadow-inner'>
            <div className="w-full h-full rounded-lg overflow-hidden">
                <img src="https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png" alt="" 
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

