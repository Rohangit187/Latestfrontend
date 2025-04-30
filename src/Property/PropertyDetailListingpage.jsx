import React from 'react'
import PropertyNavbar from './PropertyNavbar'
import PropertSearchBar from './PropertSearchBar'
import PropertyImageDetailing from './PropertyImageDetailing'
import PropertyDetailingcard from './PropertyDetailingcard'
import PropertyAmenties from './PropertyAmenties'
import Propertyother from './Propertyother'
function PropertyDetailListingpage() {
  return (
   <>
     <PropertSearchBar />
     <PropertyImageDetailing />
     <PropertyDetailingcard />
     <Propertyother />
     <PropertyAmenties />


     
     </>
  )
}

export default PropertyDetailListingpage
