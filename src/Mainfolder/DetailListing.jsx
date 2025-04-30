import React from 'react';
import Navbar from './Navbar';
import Searchbar from './SearchBar';
import ListingCardSample from './ListingCardSample';
import DetailListingCard from './DetailListingCard';
import ImageDetailListingPage from './ImageDetailListingPage';
import MenuPageDetailing from './MenuPageDetailing'
import Footer from './Footer';
import ContactForm from './ContactForm';

function DetailListing() {

  return (
    <>
    <Searchbar />
    <ImageDetailListingPage />
    <DetailListingCard />
    <MenuPageDetailing/>
    <ContactForm/>
    <Footer />
    </>
  );
}

export default DetailListing;

