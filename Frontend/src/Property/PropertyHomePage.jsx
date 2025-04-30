import React from 'react'
import PropertyNavbar from './PropertyNavbar'
import PropertyBanner from './PropertyBanner'
import PropertPopularProject from './PropertPopularProject'
import PropertyFooter from './PropertyFooter'
import PropertSearchBar from './PropertSearchBar'

function PropertyHomePage() {
  return (
   <>
   
   <PropertyNavbar /> 
   <PropertSearchBar />
   <PropertyBanner /> 
   <PropertPopularProject />
   <PropertyFooter />
   </>
  )
}

export default PropertyHomePage
