import React, { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("hhttps://thereadingnook-production.up.railway.app/books/best-sellers")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // debug log
        setBooks(data.BestSellerbooks); // ✅ Extract the array
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
      <BookCard books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSellerBooks;
