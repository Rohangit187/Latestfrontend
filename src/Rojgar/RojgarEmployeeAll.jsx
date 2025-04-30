import React, { useEffect, useState } from 'react';
import RojgarSearchbar from './RojgarSearchbar';
import RojgarNavbar from './RojgarNavbar';
import RojgarListingcard from './RojgarListingcard';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


function RojgarEmployeeAll() {
  const locationState = useLocation().state;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  if (!locationState) {
    // If someone visits this page directly without search
    navigate('/');
    return null;
  }

  const { employeeCategory, area } = locationState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-nav.navsankalp.com/api/employees/search', {
          params: {
            employeeCategory: employeeCategory,
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
        setLoading(false);
      }
    };

    fetchData();
  }, [employeeCategory, area]);

  if (loading) {
    return (
      <>
        <RojgarNavbar />
        <RojgarSearchbar />
        <p style={{ textAlign: 'center' }}>Loading businesses...</p>
      </>
    );
  }

  return (
    <>
      <RojgarNavbar />
      <RojgarSearchbar />
      {data.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No businesses found for "{employeeCategory}" in "{area}"</p>
      ) : (
        data.map((item) => (
          <RojgarListingcard key={item._id || item.id} data={item} />
        ))
      )}
    </>
  );
}

export default RojgarEmployeeAll;
