import React, { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline'; // Importa o ícone de filtro

interface FilterSelectProps {
  options: string[];
  placeholder?: string;
  onSelect: (selectedOption: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ options, placeholder = "Selecione uma opção", onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-96">
      <button
        className="w-full text-left flex items-center px-4 py-1 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FunnelIcon className="h-5 w-5 text-gray-400 mr-2" />{" "}
        {/* Ícone de filtro */}
        {selectedOption || placeholder}
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option}
              className="cursor-pointer select-none relative py-2 pl-10 pr-4 hover:bg-blue-300 hover:text-white active:bg-blue-400"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterSelect;
