import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaCartShopping } from "react-icons/fa6";
import "./BookCard.css";

// import required modules
import { Pagination } from "swiper/modules";
const BookCard = ({ headline, books }) => {
  return (
    <div className="my-16 px-4 lg:px-20">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>

      {/* cards */}

      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full pb-40"
        >
          {Array.isArray(books) &&
            books.map((book) => (
              <SwiperSlide key={book._id}>
                <Link to={`/books/${book._id}`}>
                  <div className="relative w-full overflow-hidden rounded-lg ">
                    <img
                      src={book.imageURL}
                      alt={book.title}
                      className=" h-[600px] md:h-full w-full object-cover"
                    />
                    <div className="absolute  top-3 right-3 rounded bg-blue-700 hover:bg-black p-3">
                      <FaCartShopping className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-sm text-gray-500">{book.author}</p>
                  </div>
                  <div className="mt-1">
                    <p className="text-blue-600 font-bold"> $10.00</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
