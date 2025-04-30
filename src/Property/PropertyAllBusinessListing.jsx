import React, { useEffect, useState } from 'react';
import PropertSearchBar from './PropertSearchBar';
import PropertyListingCard from './PropertyListingCard';
import { useLocation, useNavigate } from 'react-router-dom';
import PropertyNavbar from './PropertyNavbar';
import axios from 'axios';


function PropertyAllBusinessListing() {
  const locationState = useLocation().state;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  if (!locationState) {
    // If someone visits this page directly without search
    navigate('/');
    return null;
  }

  const { category, area } = locationState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-nav.navsankalp.com/api/Propertyy/search', {
          params: {
            category: category,
            area: area,
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
        navigate('/Property/Homepage');
        setLoading(false);
      }
    };

    fetchData();
  }, [category, area]);

  if (loading) {
    return (
      <>
        <PropertyNavbar />
        <PropertSearchBar />
        <p style={{ textAlign: 'center' }}>Loading businesses...</p>
      </>
    );
  }

  return (
    <>
      <PropertSearchBar />
      {data.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No businesses found for "{category}" in "{location}"</p>
      ) : (
        data.map((item) => (
          <PropertyListingCard key={item._id || item.id} data={item} />
        ))
      )}
    </>
  );
}

export default PropertyAllBusinessListing;
