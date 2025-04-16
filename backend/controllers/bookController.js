// const Book = require("../models/book.js");
const Book=require('../models/Book.js');
const { ObjectId } = require("mongodb");

const handleUploadBook = async (req, res) => {
  try {
    const {
      title,
      author,
      imageURL,
      description,
      category,
      price,
      isBestSeller,
      createdBy,
    } = req.body;

    const book = new Book({
      title,
      author,
      imageURL,
      description,
      category,
      price,
      isBestSeller,
      // createdBy: req.user._id // Assuming you have user ID in req.user after authentication
    });
    await book.save();
    res.status(201).json({ success: true, message: "Book uploaded successfully", book });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading book", error: error.message });
  }
};

const handleShowBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    if (!books.length === 0) {
      return res
        .status(404)
        .json({ message: "No books found", success: false });
    }
    res.status(200).json({ message: "Books retrieved successfully", books });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving books", error: error.message });
  }
};

const handleSingleBook=async(req,res)=>{
  try {
    const id=req.params.id;
    const book=await Book.findById(id);
    
    if(!book)
    {
      return res.status(404).json({message:"Book not found",success:false});
    }
    res.status(200).json({message:"Book retrieved successfully",book});
  } catch (error) {
    res.status(500).json({message:"Error retrieving book",error:error.message});
  }
}
const handleBestSellerBooks = async (req, res) => {
  try {
    const BestSellerbooks = await Book.find({ isBestSeller: true });
    if (!BestSellerbooks) {
      return res
        .status(404)
        .json({ message: "No books found", success: false });
    }
    res
      .status(200)
      .json({ message: "Books retrieved successfully", BestSellerbooks });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving books", error: error.message });
  }
};

const handleUpdateBooks = async (req, res) => {
  try {
    const id = req.params.id;

    const updateBookData = req.body;
    const result = await Book.findByIdAndUpdate(id, updateBookData, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      return res
        .status(404)
        .json({ message: "Book not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "Book updated successfully", result });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating book", error: error.message });
  }
};

const handleDeleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Book not found", success: false });
    }
    res.status(200).json({ message: "Book deleted successfully", result });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting book", error: error.message });
  }
};

const handleFilterByCategory=async(req,res)=>{
let query = {};

if(req.query?.category){
    query ={category: req.query.category};
  }
  const results = await Book.find(query).sort({createdAt:-1});
  if(!results.length){
    return res.status(404).json({message:"No books found",success:false});
}
res.status(200).json({message:"Books retrieved successfully", results});

}

module.exports = {
  handleUploadBook,
  handleShowBooks,
  handleSingleBook,
  handleBestSellerBooks,
  handleUpdateBooks,
  handleDeleteBook,
  handleFilterByCategory
};
