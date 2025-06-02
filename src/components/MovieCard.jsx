function MovieCard({ movie }) {
    return (
        <div className="p-4 bg-white border rounded shadow hover:shadow-lg transition">
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-80 object-cover mb-3 rounded"
            />
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-sm text-gray-500">{movie.year}</p>
        </div>
    );
}

export default MovieCard;
