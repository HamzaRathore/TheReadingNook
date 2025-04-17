import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaSearch, FaPlus, FaStar } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  // Fetch books from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://thereadingnook-production.up.railway.app/books/all-Books');
        setBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  // Delete book
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`https://thereadingnook-production.up.railway.app/books/delete/${id}`);
        setBooks(books.filter(book => book._id !== id));
        handleSuccess("Book deleted successfully!");
      } catch (error) {
        console.error('Error deleting book:', error);
        handleError("Book deletion failed!");
      }
    }
  };

  // Filter books based on search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Book Management</h1>
            <p className="text-sm sm:text-base text-gray-600">Manage your book inventory</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <Link to="/admin/dashboard/upload" className="w-full sm:w-auto">
              <button className="w-full lg:w-40 bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center">
                <FaPlus className="mr-2" />
                Add Book
              </button>
            </Link>
          </div>
        </div>

        {/* Book Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">Loading books...</div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentBooks.length > 0 ? (
                      currentBooks.map((book) => (
                        <tr key={book._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-md object-cover"
                                  src={book.imageURL || 'https://via.placeholder.com/40'}
                                  alt={book.title}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{book.title}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{book.author}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                              {book.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${book.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {book.isBestSeller ? (
                              <span className="flex items-center text-sm text-yellow-600">
                                <FaStar className="mr-1" /> Best Seller
                              </span>
                            ) : (
                              <span className="text-sm text-gray-500">Regular</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link 
                             to={`/admin/dashboard/edit-books/${book._id}`}
                             onClick={() => console.log('Navigating to edit page for book:', book._id)}
                                >
                              <button className="text-indigo-600 cursor-pointer hover:text-indigo-900 mr-4">
                                <FaEdit className="inline mr-1" /> Edit
                              </button>
                            </Link>
                            <button
                              className="text-red-600 hover:text-red-900 hover:cursor-pointer"
                              onClick={() => handleDelete(book._id)}
                            >
                              <FaTrash className="inline mr-1" /> Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                          No books found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden">
                {currentBooks.length > 0 ? (
                  currentBooks.map((book) => (
                    <div key={book._id} className="p-4 border-b border-gray-200">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="h-16 w-16 rounded-md object-cover"
                            src={book.imageURL || 'https://via.placeholder.com/64'}
                            alt={book.title}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{book.title}</div>
                          <div className="text-sm text-gray-500">{book.author}</div>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                              {book.category}
                            </span>
                            <span className="text-sm font-medium text-gray-900">${book.price}</span>
                            {book.isBestSeller && (
                              <span className="flex items-center text-xs text-yellow-600">
                                <FaStar className="mr-1" /> Best Seller
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end space-x-3">
                        <Link to={`/admin/dashboard/edit-books/${book._id}`}>
                          <button className="text-indigo-600 cursor-pointer hover:text-indigo-900 text-sm flex items-center">
                            <FaEdit className="mr-1" /> Edit
                          </button>
                        </Link>
                        <button
                          className="text-red-600 hover:text-red-900 text-sm flex items-center"
                          onClick={() => handleDelete(book._id)}
                        >
                          <FaTrash className="mr-1" /> Delete
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No books found
                  </div>
                )}
              </div>

              {/* Pagination */}
              {filteredBooks.length > booksPerPage && (
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="relative cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{indexOfFirstBook + 1}</span> to{' '}
                        <span className="font-medium">
                          {Math.min(indexOfLastBook, filteredBooks.length)}
                        </span>{' '}
                        of <span className="font-medium">{filteredBooks.length}</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <span className="sr-only">Previous</span>
                          &lt;
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                              currentPage === page
                                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <span className="sr-only">Next</span>
                          &gt;
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageBooks;
