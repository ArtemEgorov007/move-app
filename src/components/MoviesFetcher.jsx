import { useEffect, useState } from 'react';
import MovieList from './MovieList';

const API_KEY = '1c601b5cf4e732e43ef6f965956d21da';
const BASE_URL = 'https://api.themoviedb.org/3';

function MoviesFetcher({searchTerm}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
                const data = await res.json();
                const mappedMovies = data.results.map((movie) => ({
                    id: movie.id,
                    title: movie.title,
                    year: movie.release_date?.split('-')[0],
                    poster: movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://via.placeholder.com/300x450?text=No+Image',
                }));
                setMovies(mappedMovies);
            } catch (error) {
                console.error('TMDB fetch error:', error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <section className="container mx-auto py-6">
            <h2 className="text-2xl font-bold mb-4">🔥 Popular Movies from TMDB</h2>
            <MovieList movies={movies} />
        </section>
    );
}

export default MoviesFetcher;
