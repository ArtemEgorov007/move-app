import React from "react";
import { FiSearch } from "react-icons/fi";

export function SearchBar({searchTerm, setSearchTerm}) {
    return (
        <div className="container mx-auto px-4 flex flex-col gap-4 mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Search Films</h2>

            <form className="relative w-full">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />

                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search for a movie"
                    className="w-full pl-10 pr-4 py-2 text-sm sm:text-base text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </form>
        </div>
    );
}

export default SearchBar;
