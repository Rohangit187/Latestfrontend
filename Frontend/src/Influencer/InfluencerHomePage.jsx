import React from 'react'
import Navbar from './InfluencerNavbar'
import Searchbar from './InfluencerSearchbar'
import InfluencerPopularCategoryName from './InfluencerPopularCategoryName'
import InfluencerCategoryone from './InfluencerCategoryone'
import InfluencerCategoryTwo from './InfluencerCategoryTwo'
import InfluencerBannerImage from './InfluencerBannerImage'
import InfluencerReviewVideo from './InfluencerReviewVideo'
import InfluencerFooter from './InfluencerFooter'

function InfluencerHomePage() {
  return (
    <>
       <Navbar />
       <Searchbar />
       <InfluencerBannerImage />
       <InfluencerPopularCategoryName />
       <InfluencerCategoryone />
       <InfluencerCategoryTwo />
       <InfluencerReviewVideo />
       <InfluencerFooter />
    </>

  )
}

export default InfluencerHomePage
