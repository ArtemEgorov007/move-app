import {useState} from "react";
import SearchBar from "./components/SearchBar.jsx";
import MoviesFetcher from "./components/MoviesFetcher.jsx";

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <h1 className="container mx-auto text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-snug">
                <span className="text-indigo-400">Movie</span> Finder
            </h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className="min-h-screen bg-gray-50 p-6">
                <MoviesFetcher searchTerm={searchTerm} />
            </div>
        </>
    )
}

export default App
