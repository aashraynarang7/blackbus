import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Input1 = () => {
  const [location, setLocation] = useState(null);
  const [value, setValue]=useState(null);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  useEffect(() => {
    
    // Fetch initial suggestions based on current location
    fetchSuggestions(value, location);
  }, [value]);
  useEffect(()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,   
  
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting geolocation:', error);
          }
        );
      }
  
  },[])
  const fetchSuggestions = async (query, location) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&location=${location.lat},${location.lng}&key=AIzaSyBBlmwKi0xR9aidNzZoLyfX-DjmVLPRGnA`
      );
      setSearchSuggestions(response.data.predictions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSelect = (suggestion) => {
    setValue(suggestion.description);
    // Do something with the selected suggestion
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter Location"
      />
      <ul>
        {searchSuggestions && searchSuggestions.map((suggestion) => (
          <li key={suggestion.place_id} onClick={() => handleSelect(suggestion)}>
            {suggestion.description}
          </li>
        ))}
      </ul>
    </>
      
  );
};

export default Input1;