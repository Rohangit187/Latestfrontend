import React, { useEffect, useState } from 'react';
import InfluencerSearchbar from './InfluencerSearchbar';
import InfluencerNavbar from './InfluencerNavbar';
import InfluencerListingCard from './InfluencerListingCard';
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

  const { contentCategory, city } = locationState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-nav.navsankalp.com/api/influencers/search', {
          params: {
             contentCategory:contentCategory,
             city:city,
            
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
  }, [contentCategory, city]);

  if (loading) {
    return (
      <>
        <InfluencerNavbar />
        <InfluencerSearchbar />
        <p style={{ textAlign: 'center' }}>Loading businesses...</p>
      </>
    );
  }

  return (
    <>
      <InfluencerNavbar />
      <InfluencerSearchbar />
      {data.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No businesses found for "{contentCategory}" in "{city}"</p>
      ) : (
        data.map((item) => (
          <InfluencerListingCard key={item._id || item.id} data={item} />
        ))
      )}
    </>
  );
}

export default ListingPageAllBusiness;
