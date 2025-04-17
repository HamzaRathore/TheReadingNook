import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://thereadingnook-production.up.railway.app/books/all-Books")
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);

  return (
    <div className="mt-20 lg:mt-28 px-4 lg:px-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        📚 All Books Are Here
      </h2>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:mt-20">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
          >
            {/* Image */}
            <Link to={`/books/${book._id}`}>
            <div className="h-[450px] flex justify-center items-center">
              <img
                src={book.imageURL}
                alt={book.title}
                className="w-full h-full object-contain"
              />
            </div>
            </Link>

            {/* Info + Button */}
            <div className="flex flex-col justify-between flex-grow p-4 text-center">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
                <p className="text-md font-semibold text-blue-700 mb-4">
                  Price: ${book.price}
                </p>
              </div>
              <button className="w-full mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-black">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
