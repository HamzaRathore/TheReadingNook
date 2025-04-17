import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaBook,
  FaUserEdit,
  FaImage,
  FaAlignLeft,
  FaTags,
  FaDollarSign,
  FaUpload,
} from "react-icons/fa";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

console.log("Component Rendered"); // Add at the top of the component

const UploadBooks = () => {
  const initialBookState = {
    title: "",
    author: "",
    imageURL: "",
    description: "",
    category: "",
    price: "",
    isBestSeller: false,
  };

  const [bookData, setBookData] = useState(initialBookState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Comedy",
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "Biography",
    "History",
    "Fantasy",
    "Romance",
    "Horror",
    "Thriller",
    "Self-Help",
    "Crime",
    "Mystery",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      const response = await axios.post(
        "https://thereadingnook-production.up.railway.app/books/upload",
        bookData
      );
      // console.log("Response received:", response.data); 
      if (response.data?.success || response.status === 201) {
        handleSuccess("Book uploaded successfully!");
        setBookData(initialBookState);
        
      } else {
        // console.log("Upload not successful:", response.data); 
      }
    } catch (error) {
      console.error("Error uploading book:", error);
      handleError("Failed to upload book. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    console.log("Current bookData state:", bookData);
  }, [bookData]);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Add New Book
          </h1>
          <p className="text-xl text-gray-600">
            Fill in the details to add a new book to the collection
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          {/* Book Title */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="flex items-center text-lg font-medium text-gray-700 mb-2"
            >
              <FaBook className="mr-2 text-indigo-500" />
              Book Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={bookData.title}
              onChange={handleChange}
              placeholder="Enter book title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            />
          </div>

          {/* Author Name */}
          <div className="mb-6">
            <label
              htmlFor="author"
              className="flex items-center text-lg font-medium text-gray-700 mb-2"
            >
              <FaUserEdit className="mr-2 text-indigo-500" />
              Author Name *
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={bookData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            />
          </div>

          {/* Image URL */}
          <div className="mb-6">
            <label
              htmlFor="imageURL"
              className="flex items-center text-lg font-medium text-gray-700 mb-2"
            >
              <FaImage className="mr-2 text-indigo-500" />
              Book Cover Image URL *
            </label>
            <input
              type="url"
              id="imageURL"
              name="imageURL"
              value={bookData.imageURL}
              onChange={handleChange}
              placeholder="https://example.com/book-cover.jpg"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            />
            {bookData.imageURL && (
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Image Preview:</p>
                <img
                  src={bookData.imageURL}
                  alt="Book cover preview"
                  className="h-32 object-contain border rounded"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/150x200?text=Invalid+URL";
                  }}
                />
              </div>
            )}
          </div>

          {/* Price */}
          <div className="mb-6">
            <label
              htmlFor="price"
              className="flex items-center text-lg font-medium text-gray-700 mb-2"
            >
              <FaDollarSign className="mr-2 text-indigo-500" />
              Price *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={bookData.price}
              onChange={handleChange}
              placeholder="Enter price in USD"
              min="0"
              step="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="flex items-center text-lg font-medium text-gray-700 mb-2"
            >
              <FaAlignLeft className="mr-2 text-indigo-500" />
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={bookData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Enter book description..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="flex items-center text-lg font-medium text-gray-700 mb-2"
            >
              <FaTags className="mr-2 text-indigo-500" />
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={bookData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Best Seller */}
          <div className="mb-8 flex items-center">
            <input
              type="checkbox"
              id="isBestSeller"
              name="isBestSeller"
              checked={bookData.isBestSeller}
              onChange={handleChange}
              className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="isBestSeller"
              className="ml-2 flex items-center text-gray-700"
            >
              <FaStar className="text-yellow-400 mr-1" />
              Mark as Best Seller
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                "Uploading..."
              ) : (
                <>
                  <FaUpload className="mr-2" />
                  Add Book
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />

    </div>
  );
};

export default UploadBooks;
