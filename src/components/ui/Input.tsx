'use client';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { RiArrowDownSLine } from 'react-icons/ri';

export default function Input() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log(searchValue);
  };

  return (
    <div className="flex items-center ">
      <div className="flex  items-center gap-2  grow relative">
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="px-2 py-2 outline-none flex-1"
          type="text"
          value={searchValue}
          placeholder="search for products..."
        />
        {searchValue && (
          <RxCross2
            onClick={() => {
              setSearchValue('');
            }}
            className="mr-2 hover:text-red-500 duration-300 cursor-pointer"
          />
        )}
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue h-full px-3 py-2 text-white font-medium"
      >
        search
      </button>
    </div>
  );
}
