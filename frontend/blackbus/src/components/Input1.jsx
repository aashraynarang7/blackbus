import React, { useEffect, useState } from "react";
import axios from "axios";

const Input1 = () => {
  const [location, setLocation] = useState(null);
  const [value, setValue] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [n ,setn]=useState(0);
  useEffect(() => {
    // Fetch initial suggestions based on current location
    fetchSuggestions(value, location);
  }, [value]);
  useEffect(() => {
    // Fetch initial suggestions based on current location
    setn( searchSuggestions.length);
  }, [searchSuggestions]);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    }
  }, []);
  const fetchSuggestions = async (query, location) => {
    try {
      let obj = {
        query,
        latitude: "29.465288851311406",
        longitude: "77.70990371704102",
      };
      const response = await axios.post(
        "http://localhost:3000/location/v1/suggestions",
        obj
      );
      console.log(response);
      setSearchSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
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
        style={{ width: "400px", height: "45px" }}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter Location"
      />
      <ul
        style={{
          width:"400px",
          backgroundColor: "white",
          borderRadius: "7px",
          zIndex:-10
        }}
      >
        {
        searchSuggestions &&
          searchSuggestions.map((suggestion,idx) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion)}
              style={{ cursor: "pointer",
               backgroundColor:(idx%2==1)?"rgb(230,230,230)":"white",
               borderRadius:(idx==0)?"7px 7px 0px 0px":(idx==n-1)?"0px 0px 7px 7px":"0px",
               padding:"5px",
               fontSize:"14px"
               }}
            >
              {suggestion.description}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Input1;
