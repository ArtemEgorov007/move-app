import MovieCard from './MovieCard';

function MovieList({ movies }) {
    if (!movies.length) return <p className="text-center text-gray-400">No movies found</p>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;
