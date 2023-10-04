import React, { useState } from "react";
import { Link } from "react-router-dom";

const Banner = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="relative h-[70vh]">
      <div
        className="absolute inset-0 z-0 bg-[url('https://i.ibb.co/pXQ6Dyy/food3.jpg')] opacity-10 rounded mb-20"
        style={{ backdropFilter: "blur(10px)" }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div>
          <h2 className="font-bold text-gray-700 text-xl lg:text-3xl py-8">
            I Grow By Helping People In Need
          </h2>
        </div>
        <div>
          <input
            type="text"
            className="opacity-100 p-2 rounded w-full md:w-80 lg:w-96 focus:outline-none "
            placeholder="Search by Category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="btn btn-primary mt-2 bg-red-500 text-white rounded px-4 py-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
