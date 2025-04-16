import React, { useEffect } from "react";
import favBook from "../../assets/fav.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const FavouriteBooks = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  

  return (
    <div className="px-4 md:px-8 lg:px-60 my-10 md:my-20  flex flex-col md:flex-row gap-8 md:gap-12" >
      {/* left side - image */}
      <div className="md:w-1/2 flex justify-center md:justify-start"  data-aos="fade-left"
    data-aos-delay="200">
        <img
          src={favBook}
          alt="Favourite book"
          className="rounded w-full max-w-md md:w-10/12 lg:w-auto object-cover"
        />
      </div>

      {/* right side - content */}
      <div className="md:w-1/2 flex flex-col"  data-aos="fade-right"
    data-aos-delay="200">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 md:mb-10 leading-snug">
          Find Your Favourite <span className="text-blue-700">Book</span>
        </h2>

        <p className="mb-8 md:mb-10 text-lg md:text-base lg:text-lg md:w-5/6 lg:w-3/4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eos
          rerum fuga tempora voluptatum quo praesentium inventore cumque,
          exercitationem minus! Praesentium voluptate saepe libero, quisquam
          quam necessitatibus excepturi! Nisi a aliquam dolorum ipsa impedit!
        </p>

        {/* stats */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="flex-1 min-w-[120px] flex flex-col items-center sm:items-start">
            <h3 className="text-3xl font-bold">400+</h3>
            <p className="text-base text-gray-700">Book Listing</p>
          </div>
          <div className="flex-1 min-w-[120px] flex flex-col items-center sm:items-start">
            <h3 className="text-3xl font-bold">350+</h3>
            <p className="text-base text-gray-700">Register Users</p>
          </div>
          <div className="flex-1 min-w-[120px] flex flex-col items-center sm:items-start">
            <h3 className="text-3xl font-bold">180+</h3>
            <p className="text-base text-gray-700">Downloads</p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <Link
            to="/shop"
            className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-black transition-all duration-200"
          >
            <button>Browse Books</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavouriteBooks;
