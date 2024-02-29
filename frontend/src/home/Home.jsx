import React from 'react'
import Banner from '../components/Banner'
import FavoriteBooks from './FavoriteBooks'
import OtherBooks from './OtherBooks'
import BannerCard from './BannerCard'

const Home = () => {
  return (
    <div >
        <Banner/>
        <FavoriteBooks/>
        <OtherBooks/>
        <BannerCard/>
    </div>
  )
}

export default Home