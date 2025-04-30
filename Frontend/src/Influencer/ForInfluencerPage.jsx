import React from 'react'
import Searchbar from './InfluencerSearchbar'
import InfluencerBannerImage from './InfluencerBannerImage'
import InfluencerUspPoints from './InfluencerUspPoints'
import InfluencerPopularBrands from './InfluencerPopularBrands'
import ForInfluencerbanner from './ForInfluencerbanner'

function ForInfluencerPage() {
  return (
    <>
     <Searchbar />
     <ForInfluencerbanner />
     <InfluencerPopularBrands />
     <InfluencerUspPoints />
    </>
   
  )
}

export default ForInfluencerPage
