import { useEffect, useState } from 'react';
import MovieList from './MovieList';

const API_KEY = '1c601b5cf4e732e43ef6f965956d21da';
const BASE_URL = 'https://api.themoviedb.org/3';

function MoviesFetcher({ searchTerm }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovies() {
            setLoading(true);
            setError(null);

            const endpoint = searchTerm
                ? `/search/movie?query=${encodeURIComponent(searchTerm)}&api_key=${API_KEY}&language=en-US&page=1`
                : `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

            try {
                const res = await fetch(`${BASE_URL}${endpoint}`);
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.status_message || 'Failed to fetch movies');
                }

                const mappedMovies = (data.results || []).map((movie) => ({
                    id: movie.id,
                    title: movie.title,
                    year: movie.release_date?.split('-')[0],
                    poster: movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://via.placeholder.com/300x450?text=No+Image',
                }));

                setMovies(mappedMovies);
            } catch (err) {
                console.error('TMDB fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, [searchTerm]);

    return (
        <section className="container mx-auto py-6 px-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {searchTerm ? `🔎 Searching: "${searchTerm}"` : '🔥 Popular Movies'}
            </h2>

            {loading && (
                <div className="flex justify-center py-10">
                    <div className="w-8 h-8 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {error && (
                <p className="text-center text-red-500 font-medium py-4">
                    🚨 {error}
                </p>
            )}

            {!loading && !error && <MovieList movies={movies} />}
        </section>
    );
}

export default MoviesFetcher;
