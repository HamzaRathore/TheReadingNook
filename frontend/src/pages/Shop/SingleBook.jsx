import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

const SingleBook = () => {
  const book = useLoaderData();
  const navigate = useNavigate(); // Using useNavigate for more reliable navigation

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Added mt-8 to push it down and improved navigation */}
        <button 
          onClick={() => navigate('/shop')} 
          className="mt-8 hover:cursor-pointer flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Shop
        </button>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="md:flex gap-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img 
                src={book.imageURL} 
                alt={book.title} 
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
              <p className="text-gray-600 mb-4">by {book.author}</p>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < (book.rating || 0) ? "text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4">{book.description}</p>
              
              <div className="mb-6">
                <span className="text-xl font-bold text-blue-600">${book.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;