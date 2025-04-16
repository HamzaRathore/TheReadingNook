import React from "react";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="bg-teal-100 min-h-screen w-full overflow-hidden px-4 sm:px-6 lg:px-24 pt-32">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Left side */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-black">
            Buy and Sell Your Books{" "}
            <span className="text-blue-700">for the best prices</span>
          </h2>
          <p className="text-base text-gray-700">
            Join thousands of book lovers buying, selling, and exchanging
            pre-loved books. Find hidden gems, bestsellers, and rare editions
            while giving books a second life.
          </p>
          <div className="flex flex-col sm:flex-row w-full max-w-md ">
            <input
              type="search"
              name="search"
              placeholder="Search a Book"
              className="py-2 px-4 rounded-sm bg-white outline-none w-full"
            />
            <button className="bg-blue-700 px-6 py-2 text-white rounded-md hover:bg-black transition-all ease-in duration-200 w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full  md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <div className="max-w-xs sm:max-w-sm md:max-w-md w-full">
            <BannerCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
