import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaUserEdit,
  FaImage,
  FaAlignLeft,
  FaTags,
  FaDollarSign,
  FaUpload,
  FaStar,
} from "react-icons/fa";

const EditBooks = () => {
  const { id } = useParams();
  const loadedBook = useLoaderData();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    title: loadedBook?.title || "",
    author: loadedBook?.author || "",
    imageURL: loadedBook?.imageURL || "",
    description: loadedBook?.description || "",
    category: loadedBook?.category || "",
    price: loadedBook?.price || "",
    isBestSeller: loadedBook?.isBestSeller || false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    console.log("Loaded Book Data:", loadedBook);
  }, [loadedBook]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Validate required fields
      if (!bookData.title || !bookData.author || !bookData.price) {
        throw new Error("Please fill all required fields");
      }

      const response = await fetch(`https://thereadingnook-production.up.railway.app/books/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update book");
      }

      const result = await response.json();
      console.log("Update successful:", result);
      navigate("/admin/dashboard/manage", {
        state: { message: "Book updated successfully!" },
      });
    } catch (error) {
      console.error("Update error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Update The Book
          </h1>
          <p className="text-xl text-gray-600">
            Fill in the details to update book in the collection
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form
          onSubmit={handleUpdate}
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
              step="0.01"
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
              disabled={isLoading}
              className={`flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <FaUpload className="mr-2" />
              {isLoading ? "Updating..." : "Update Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBooks;
