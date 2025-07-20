import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white dark:text-gray-100 text-4xl md:text-5xl font-bold mb-4">
          Find the Best Courses for You
        </h1>
        <p className="text-gray-200 dark:text-gray-400 text-lg mb-8">
          Discover, learn, and grow with our curated selection of online
          courses. Whether you're upskilling or starting fresh, we have
          something for you.
        </p>

        {/* ✅ Search Bar */}
        <form
          action=""
          className="flex items-center bg-white dark:bg-gray-800 rounded-full overflow-hidden max-w-xl mx-auto shadow-lg border border-gray-300 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 transition-all"
        >
          <input
            type="text"
            placeholder="Search for courses..."
            className="flex-grow px-5 py-3 text-gray-700 dark:text-gray-200 bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500"
          />
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 transform hover:scale-105">
            Search
          </Button>
        </form>
        <Button className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-400 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 transition duration-300 transform hover:scale-105 mx-auto mt-6">
          Explore
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
