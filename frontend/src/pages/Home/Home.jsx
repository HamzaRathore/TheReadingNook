import React from 'react'
import Banner from './Banner'
import FavouriteBook from './BestSellerBooks'
import BestSellerBooks from './BestSellerBooks'
import FavouriteBooks from './FavouriteBooks'
import AwardSection from './AwardSection'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
     <BestSellerBooks/>
     <FavouriteBooks/>
     <AwardSection/>
     <OtherBooks/>
     <Reviews/>
     
    </div>
  )
}

export default Home
