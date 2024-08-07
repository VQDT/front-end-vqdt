import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
    setSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        setSearch(event.target.value);
    };

    return (
        <div className="relative w-full mt-8">
            <div className="flex items-center w-full">
                <FaSearch className="absolute ml-3 text-gray-400" />
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Buscar..."
                />
            </div>
        </div>
    );
};

export default SearchBar;
