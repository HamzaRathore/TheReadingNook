import React, { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";
import AOS from "aos";
import "aos/dist/aos.css";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://thereadingnook-production.up.railway.app/books/all-Books")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // debug log
        setBooks(data.books); // ✅ Extract the array
      });
  }, []);

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  
  return (
    <div data-aos="fade-up"
    data-aos-delay="200">
      <BookCard books={books} headline="All Books" />
    </div>
  );
};

export default OtherBooks;
