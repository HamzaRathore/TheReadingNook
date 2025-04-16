import React from 'react';
import { FaBookOpen, FaUsers, FaAward, FaHeart } from 'react-icons/fa';
import { GiBookshelf } from 'react-icons/gi';
import { Link } from "react-router-dom";
// import teamImage from '../assets/team.jpg'; // Replace with your actual image

const About = () => {
  return (
    <div className="min-h-screen pt-18 bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Connecting readers with their next favorite book since 2023
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-top-left"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-12">
              At Book Haven, we believe in the transformative power of reading. 
              Our mission is to create a welcoming space where book lovers can discover 
              new worlds, share their passion, and find exactly what they're looking for.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 rounded-lg bg-indigo-50">
                <FaBookOpen className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg">10,000+ Titles</h3>
              </div>
              <div className="p-6 rounded-lg bg-purple-50">
                <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg">50,000+ Readers</h3>
              </div>
              <div className="p-6 rounded-lg bg-blue-50">
                <FaAward className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg">100+ Awards</h3>
              </div>
              <div className="p-6 rounded-lg bg-pink-50">
                <FaHeart className="text-4xl text-pink-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg">Community First</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <img 
                src={"https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                alt="Our Team" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Passionate Book Lovers</h3>
              <p className="text-gray-600 mb-6">
                Our team consists of avid readers, literary experts, and tech enthusiasts 
                who have come together to build the ultimate book shopping experience. 
                Each member brings unique perspectives to help you find your perfect read.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Curated recommendations based on your taste</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Expert reviews from our in-house bibliophiles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Personalized reading challenges and events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50">
              <GiBookshelf className="text-5xl text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Diverse Selection</h3>
              <p className="text-gray-600">
                We pride ourselves on offering books from all genres, cultures, 
                and perspectives to ensure every reader finds something they love.
              </p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <FaHeart className="text-5xl text-pink-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                Our book clubs, author events, and reading challenges bring readers 
                together to share their love of literature.
              </p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
              <FaAward className="text-5xl text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every book in our collection is carefully selected to meet our high 
                standards of literary quality and reader satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Reading Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy readers discovering their next favorite book with us.
          </p>
          <Link to={'/shop'}><button className=" hover:cursor-pointer px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Browse Our Collection
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;