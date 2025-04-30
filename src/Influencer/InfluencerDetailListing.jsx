import React from 'react'
import InfluencerSearchbar from './InfluencerSearchbar'
import ImageDetailListingPage from './InfluencerImageDetailingPage'
import InfluencerDetailingCard from './InfluencerDetailingCard'
import InfluencerContactForm from './InfluencerContactForm'

function InfluencerDetailListing() {
  return (
   <>
   <InfluencerSearchbar />
    <ImageDetailListingPage />
    <InfluencerDetailingCard />
    <InfluencerContactForm />
   </>
  )
}

export default InfluencerDetailListing
