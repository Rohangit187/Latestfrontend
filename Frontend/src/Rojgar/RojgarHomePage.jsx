import React from 'react'
import RojgarNavbar from './RojgarNavbar'
import RojgarSearchbar from './RojgarSearchbar'
import RojgarBannerImage from './RojgarBannerImage'
import RojgarCategory1 from './RojgarCategory1'
import RojgarCategory2 from './RojgarCategory2'
import RojgarCategoryName from './RojgarCategoryName'
import RojgarUspData from './RojgarUspData'

function RojgarHomePage() {
  return (
   <>
    <RojgarNavbar /> 
    <RojgarSearchbar />
    <RojgarBannerImage />
    <RojgarCategoryName />
    <RojgarCategory1 />
    <RojgarCategory2 />
    <RojgarUspData />
   
   
   </>
  )
}

export default RojgarHomePage
