import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

const reviews = [
    {
      rating: 5,
      text: "Absolutely love this platform! The collection is huge and the delivery was lightning fast. I've already ordered three times and every experience was smooth. Highly recommended for all book lovers!",
      name: "Ali Raza",
      date: "April 16, 2025"
    },
    {
      rating: 4,
      text: "Got my favorite book in just two days. Website UI is super clean and easy to navigate. I was amazed at how well-packaged the books were. Definitely ordering again soon!",
      name: "Sara Ahmed",
      date: "April 15, 2025"
    },
    {
      rating: 5,
      text: "The best online bookstore I've used! Everything from selection to checkout was smooth. The staff is also very responsive if you have queries. I’m really impressed by the service!",
      name: "Usman Khan",
      date: "April 14, 2025"
    },
    {
      rating: 4,
      text: "Books were well packaged and original. The descriptions on the site are accurate and helpful. I also loved the recommended books feature — found some real gems that way!",
      name: "Fatima Noor",
      date: "April 12, 2025"
    },
    {
      rating: 5,
      text: "I was skeptical at first, but wow—this store blew me away. The variety, the price, and the delivery time were all amazing. It's now my go-to place for books!",
      name: "Hassan Tariq",
      date: "April 10, 2025"
    },
    {
      rating: 4,
      text: "Great experience overall! Customer support was friendly and helpful when I had questions. My order arrived quickly and in perfect condition. Will shop again!",
      name: "Zainab Malik",
      date: "April 8, 2025"
    },
    {
      rating: 5,
      text: "This bookstore is a hidden gem. I love how they categorize books—super easy to find what I’m looking for. The discount section is a bonus!",
      name: "Taha Siddiqui",
      date: "April 6, 2025"
    },
  ];

const Reviews = () => {
  return (
    <div className='my-20 px-4 lg:px-24'>
      <h2 className='text-4xl md:text-5xl font-bold text-center mb-16'>
        What Our <span className='text-blue-700'>Readers Say</span>
      </h2>

      <div className='w-full flex justify-center'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className='mySwiper w-full max-w-[1300px] px-4'
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className='!w-[360px] md:!w-[420px] lg:!w-[500px] !h-auto flex justify-center items-center'
            >
              <div className='bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between transition-transform hover:scale-105 duration-300 border border-gray-100'>

                {/* Stars */}
                <div className='flex gap-1 mb-4 text-yellow-400 text-lg'>
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review Text */}
                <p className='text-gray-700 mb-6 text-[1.1rem] leading-relaxed italic'>
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div>
                  <p className='font-semibold text-lg'>{review.name}</p>
                  <p className='text-sm text-gray-500'>{review.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
