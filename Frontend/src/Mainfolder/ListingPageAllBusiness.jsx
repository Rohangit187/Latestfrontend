import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import ListingCardSample from './ListingCardSample';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


function ListingPageAllBusiness() {
  const locationState = useLocation().state;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  if (!locationState) {
    // If someone visits this page directly without search
    navigate('/');
    return null;
  }

  const { business, location } = locationState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-nav.navsankalp.com/api/business/search', {
          params: {
            category: business,
            city: location,
          },
        });
        console.log(response.data);
      

        //console.log(filteredData);
        setData(response.data); // assuming response is an array
       // console.log(filteredData);
        console.log(data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching business data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [business, location]);

  if (loading) {
    return (
      <>
        <Navbar />
        <SearchBar />
        <p style={{ textAlign: 'center' }}>Loading businesses...</p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <SearchBar />
      {data.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No businesses found for "{business}" in "{location}"</p>
      ) : (
        data.map((item) => (
          <ListingCardSample key={item._id || item.id} data={item} />
        ))
      )}
    </>
  );
}

export default ListingPageAllBusiness;
