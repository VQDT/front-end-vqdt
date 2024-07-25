import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
    suggestions: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ suggestions }) => {
    const [query, setQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        if (value.length > 0) {
            const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
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
            {filteredSuggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => {
                                setQuery(suggestion);
                                setFilteredSuggestions([]);
                            }}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
