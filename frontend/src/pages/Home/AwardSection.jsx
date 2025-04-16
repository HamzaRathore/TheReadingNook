import React from "react";
import awardBook from "../../assets/awardd.png";
import { Link } from "react-router-dom";
const AwardSection = () => {
  return (
    <div className="mt-16 bg-blue-200 py-10 md:py-20 flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-12 lg:px-20">
      {/* left text section */}
      <div className="md:w-1/2 px-14 flex flex-col justify-center items-start gap-5">
        <h1 className="text-4xl lg:text-5xl font-bold pb-4">
          2024 National Book Award For Fiction Shortlist
        </h1>
        <Link
          to="/shop"
          className="bg-blue-700 text-white px-5 py-3 rounded  md:mt-6 hover:bg-black transition-all duration-200"
        >
          <button>Get Promo Code</button>
        </Link>
      </div>

      {/* right image section */}
      <div className="md:w-1/2 flex justify-center items-center ">
        <img
          className="h-64 md:h-72 lg:h-96 w-full max-w-[500px] object-contain mx-auto"
          src={awardBook}
          alt="award book"
        />
      </div>
    </div>
  );
};

export default AwardSection;
