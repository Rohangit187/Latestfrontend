import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  ListingPageAllBusiness from './Mainfolder/ListingPageAllBusiness'
import HomePage from './Mainfolder/HomePage'
import CreateListing from "./Mainfolder/CreateListing";
import DetailListing from "./Mainfolder/DetailListing";
import InfluencerHomePage from './Influencer/InfluencerHomePage'
import InfluencerCreateListing from './Influencer/InfluencerCreateListing'
import InfluencerAllListingPage from './Influencer/InfluencerAllListingPage'
import InfluencerDetailListing from './Influencer/InfluencerDetailListing'
import ForInfluencerPage from './Influencer/ForInfluencerPage'
import ForBusinessPage from './Influencer/ForBusinessPage'
import InfluencerAboutus from './Influencer/InfluencerAboutus'
import PropertyHomePage from './Property/PropertyHomePage'
import PropertyCreateListing from './Property/PropertyCreateListing'
import PropertyAllBusinessListing from './Property/PropertyAllBusinessListing'
import PropertyDetailListingpage from './Property/PropertyDetailListingpage'
import RojgarHomePage from './Rojgar/RojgarHomePage'
import RojgarCreateListing from './Rojgar/RojgarCreateListing'
import RojgarEmployeeAll from './Rojgar/RojgarEmployeeAll'
import PrivacyPolicy from './Mainfolder/PrivacyPolicy'

function App() {  
  return (
<>
<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing" element={<ListingPageAllBusiness/>} />
        <Route path="/create/listing" element={<CreateListing />}/>
        <Route path="/create/listing/detail" element={<DetailListing/>} />
        <Route path="/Influencer/Homepage" element={<InfluencerHomePage/>} />
        <Route path="/Influencer/create/listing" element={<InfluencerCreateListing/>} />
        <Route path="/Influencer/listing/page" element={<InfluencerAllListingPage/>} />
        <Route path="/Influencer/listing/detail/page" element={<InfluencerDetailListing/>} />
        <Route path="/Influencer/ForInfluencerpage" element={<ForInfluencerPage/>} />
        <Route path="/Influencer/ForBusinessPage" element={<ForBusinessPage/>} />
        <Route path="/Influencer/Aboutus" element={<InfluencerAboutus/>} />
        <Route path="/Property/Homepage" element={<PropertyHomePage/>} />
        <Route path="/Property/create/listing" element={<PropertyCreateListing/>} />
        <Route path="/Property/all/business" element={<PropertyAllBusinessListing/>} />
        <Route path="/Property/detail/page" element={<PropertyDetailListingpage/>} />   
        <Route path="/rojgar/home" element={<RojgarHomePage/>} />
        <Route path="/rojgar/create/listing" element={<RojgarCreateListing/>} />
        <Route path="/rojgar/listing/all" element={<RojgarEmployeeAll/>} />
        <Route path="/privacy/policy" element={<PrivacyPolicy/>} />
          </Routes>
    </Router>
    </> 
 );
}

export default App;

