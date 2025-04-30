import React from 'react'
import Navbar from './Navbar'
import Searchbar from  './SearchBar'
import CategoryShowcase from './CategoryShowcase'
import CategoryShowcasetwo from './CategoryShowcasetwo'
import Popularname from './Popularname'
import PopularSearchCard from './PopularSearchCard'
import ContactForm from './ContactForm'
import UspContent from './UspContent'
import ReviewVideo from './ReviewVideo'
import Footer from './Footer'
function HomePage() {
  return (
    <>
    <Navbar />
    <Searchbar />
    <Popularname />
    <CategoryShowcase />
    <CategoryShowcasetwo />
    <PopularSearchCard />
    <ReviewVideo/>
    <ContactForm />
    <UspContent />
    <Footer />
</>
  )
}

export default HomePage
